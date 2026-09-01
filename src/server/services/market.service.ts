// (api coingecko для получения цен на крипту за 24 часа)
import { prisma } from "../db/prisma";

const COINGECKO_API_URL =
  "https://api.coingecko.com/api/v3";

type MarketData = {
  usd: number;
  usd_24h_change: number;
  chart: number[];
};

type MarketCache = {
  data: Record<string, MarketData>;
  timestamp: number;
};

const marketCache = new Map<
  string,
  MarketCache
>();

const MARKET_CACHE_TTL = 5 * 60 * 1000; // 5 минут

const chartCache = new Map<
  string,
  {
    chart: number[];
    timestamp: number;
  }
>();

const CHART_CACHE_TTL = 5 * 60 * 1000; // 5 минут

export async function getWatchlistMarketData(
  watchlistId: string,
): Promise<Record<string, MarketData>> {
  const cachedMarket = marketCache.get(watchlistId);

  if (
    cachedMarket &&
    Date.now() - cachedMarket.timestamp <
      MARKET_CACHE_TTL
  ) {
    return cachedMarket.data;
  }

  const watchlistItems =
    await prisma.watchlistItem.findMany({
      where: {
        watchlistId,
      },

      select: {
        assetToken: {
          select: {
            slug: true,
          },
        },
      },
    });

  const slugs = [
    ...new Set(
      watchlistItems.map(
        (item) => item.assetToken.slug,
      ),
    ),
  ];

  if (slugs.length === 0) {
    return {};
  }

  /*
   * =========================
   * PRICE
   * =========================
   */

  const priceParams = new URLSearchParams({
    ids: slugs.join(","),
    vs_currencies: "usd",
    include_24hr_change: "true",
  });

  const priceResponse = await fetch(
    `${COINGECKO_API_URL}/simple/price?${priceParams}`,
  );

  if (!priceResponse.ok) {
    /*
     * Если CoinGecko вернул 429,
     * пробуем вернуть старый кеш.
     */
    if (priceResponse.status === 429) {
      console.warn(
        "CoinGecko rate limit reached",
      );

      if (cachedMarket) {
        return cachedMarket.data;
      }
    }

    throw new Error(
      `CoinGecko price request failed: ${priceResponse.status}`,
    );
  }

  const prices = await priceResponse.json();

  const result: Record<string, MarketData> = {};

  /*
   * =========================
   * BASE DATA
   * =========================
   */

  for (const slug of slugs) {
    const coin = prices[slug];

    if (!coin) {
      continue;
    }

    result[slug] = {
      usd: coin.usd,
      usd_24h_change:
        coin.usd_24h_change ?? 0,
      chart: [],
    };
  }

  /*
   * =========================
   * CHART
   * =========================
   */

  for (const slug of slugs) {
    if (!result[slug]) {
      continue;
    }

    const cachedChart = chartCache.get(slug);

    if (
      cachedChart &&
      Date.now() - cachedChart.timestamp <
        CHART_CACHE_TTL
    ) {
      result[slug].chart =
        cachedChart.chart;

      continue;
    }

    try {
      const chartParams =
        new URLSearchParams({
          vs_currency: "usd",
          days: "1",
        });

      const response = await fetch(
        `${COINGECKO_API_URL}/coins/${slug}/market_chart?${chartParams}`,
      );

      if (!response.ok) {
        console.error(
          `Chart request failed for ${slug}: ${response.status}`,
        );

        /*
         * Если старый chart есть,
         * используем его.
         */
        if (cachedChart) {
          result[slug].chart =
            cachedChart.chart;
        }

        continue;
      }

      const data =
        await response.json();

      const chart = data.prices
        .map(
          ([, price]: [number, number]) =>
            price,
        )
        .filter(
          (_: number, index: number) =>
            index %
              Math.ceil(
                data.prices.length / 100,
              ) === 0,
        );

      chartCache.set(slug, {
        chart,
        timestamp: Date.now(),
      });

      result[slug].chart = chart;
    } catch (error) {
      console.error(
        `Failed to get chart for ${slug}:`,
        error,
      );

      if (cachedChart) {
        result[slug].chart =
          cachedChart.chart;
      }
    }
  }

  /*
   * =========================
   * SAVE MARKET CACHE
   * =========================
   */

  marketCache.set(watchlistId, {
    data: result,
    timestamp: Date.now(),
  });

  return result;
}
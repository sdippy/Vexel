import { PrismaClient } from "@prisma/client";

import { getCryptoColor } from "../shared/utils/Crypto/crypto";

const prisma = new PrismaClient();

const COINGECKO_API =
  "https://api.coingecko.com/api/v3/coins/markets";

const TOTAL_PAGES = 4;
const PER_PAGE = 250;

type CoinGeckoCoin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
};

async function fetchCoins(page: number): Promise<CoinGeckoCoin[]> {
  const url = new URL(COINGECKO_API);

  url.searchParams.set("vs_currency", "usd");
  url.searchParams.set("order", "market_cap_desc");
  url.searchParams.set("per_page", String(PER_PAGE));
  url.searchParams.set("page", String(page));

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `CoinGecko error: ${response.status} ${response.statusText}`,
    );
  }

  return (await response.json()) as CoinGeckoCoin[];
}

async function main() {
  let imported = 0;

  for (let page = 1; page <= TOTAL_PAGES; page++) {
    console.log(`Fetching page ${page}/${TOTAL_PAGES}...`);

    const coins = await fetchCoins(page);

    for (const coin of coins) {
      const symbol = coin.symbol.toUpperCase();

      await prisma.assetToken.upsert({
        where: {
          slug: coin.id,
        },

        update: {
          symbol,
          name: coin.name,
          imageUrl: coin.image,
          color: getCryptoColor(symbol),
        },

        create: {
          symbol,
          name: coin.name,
          slug: coin.id,
          imageUrl: coin.image,
          color: getCryptoColor(symbol),
        },
      });

      imported++;
    }

    console.log(
      `Page ${page}: ${coins.length} coins imported`,
    );
  }

  console.log(`\nDone! Processed: ${imported} coins.`);
}

main()
  .catch((error) => {
    console.error("Import failed:");
    console.error(error);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
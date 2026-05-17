import { newsRegistry } from "./news.registry";
import type { NewsResolved, NewsMarketSentimentTheme } from "./news.types";

const aliasIndex: Record<string, keyof typeof newsRegistry> =
  Object.fromEntries(
    Object.values(newsRegistry).flatMap((c) =>
      c.aliases.map((a) => [a.toLowerCase(), c.symbol]),
    ),
  ) as Record<string, keyof typeof newsRegistry>;

export function getNewsMarketSentiment(input: string): NewsResolved {
  const key = aliasIndex[input.toLowerCase()];
  return newsRegistry[key] ?? newsRegistry.BULLISH;
}

const defaultTheme: NewsMarketSentimentTheme = {
  bgColor: "rgba(156, 163, 175, 0.12)",
  borderColor: "rgba(156, 163, 175, 0.3)",
  color: "rgba(156, 163, 175, 1)",
};

export function getNewsMarketSentimentTheme(
  name: string,
): NewsMarketSentimentTheme {
  const c = getNewsMarketSentiment(name);

  return c?.theme ?? defaultTheme;
}

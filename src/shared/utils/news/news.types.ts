export type NewsMarketSentimentName =
  | "BULLISH"
  | "BREAKING"
  | "BEARISH"
  | "NEUTRAL";

export type NewsMarketSentimentAlias = string;

export type NewsMarketSentimentTheme = {
  color: string;
  bgColor: string;
  borderColor: string;
};

export type NewsMarketSentimentItem = {
  symbol: NewsMarketSentimentName;
  theme: NewsMarketSentimentTheme;
  aliases: readonly NewsMarketSentimentAlias[];
};

export type NewsRegistry = Record<
  NewsMarketSentimentName,
  NewsMarketSentimentItem
>;

export type NewsResolved = NewsMarketSentimentItem;

export type NewsInput = NewsMarketSentimentName | (string & {});

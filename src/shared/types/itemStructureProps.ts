export type WatchlistItem = {
  id: number;
  nameCoin: string;
  priceData: number[];
};

export type MarketMoversItem = {
  id: number;
  label: string;
  nameCoin: string;
  priceChange: string;
  color: string;
};

export type MarketIntelligence = {
  id: number;
  label: string;
  timeToRead: string;
  typeTopic: string;
  timeCreated: string;
  imgTopic: string;
};

export type NotificationItem = {
  id: number;
  type: string;
  title: string;
  description: string;
  volatility: string;
  date: string;
};

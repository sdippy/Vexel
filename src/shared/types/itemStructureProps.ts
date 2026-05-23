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
  id: string;
  label: string;
  timeToRead: string;
  typeTopic: string;
  createdAt: string;
  imgTopic: string;
};

export type MarketNews = {
  id: string;
  topic: string;
  label: string;
  description: string;
  timeToRead: string;
  typeTopic: string;
  imageUrl: string;
  keywords: string[];
  createdAt: string;
};

export type NotificationItem = {
  id: number;
  type: string;
  title: string;
  description: string;
  volatility: string;
  date: string;
};

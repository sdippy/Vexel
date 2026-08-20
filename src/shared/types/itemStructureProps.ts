// Market types
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
  imageUrl: string;
};

export type MarketNews = {
  id: string;
  topic: string;
  label: string;
  description: string;
  comment: string;
  source: string;
  author: string;
  timeToRead: string;
  typeTopic: string;
  imageUrl: string;
  keywords: string[];
  createdAt: string;
};

export type MarketNewsTopic = {
  topic: string;
  count: number;
};

// Watchlist types
export type Watchlist = {
  id: string;
  userId: string;
  name: string;
  isGlobal: boolean;
  createdAt: string;
}

export type WatchlistItem = {
  id: string;
  watchlistId: string;
  assetTokenId: string;
  createdAt: string;
  priceData: number[];
}

// Fix price data on API response to match the WatchlistItemPrice type
export type WatchlistItemPrice = {
  id: number;
  nameCoin: string;
  priceData: number[];
};

export type AssetsWatchlistCategory = {
  id: string;
  name: string;
};

// Coin types
export type AssetToken = {
  id: string;
  symbol: string;
}

export type NotificationItem = {
  id: number;
  type: string;
  title: string;
  description: string;
  volatility: string;
  date: string;
};

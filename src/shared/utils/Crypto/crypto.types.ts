import type { ComponentType } from "react";

export type CryptoName =
  | "BTC"
  | "ETH"
  | "SOL"
  | "USDT"
  | "USDC"
  | "BNB"
  | "XRP"
  | "ADA"
  | "DOGE"
  | "TON"
  | "TRX"
  | "DOT"
  | "AVAX"
  | "LINK"
  | "MATIC"
  | "SHIB"
  | "LTC"
  | "BCH"
  | "UNI"
  | "ATOM";

export type CryptoAlias = string;

export type CryptoTheme = {
  color: string;
  bgColor: string;
  borderColor: string;
};

export type CryptoRegistryItem = {
  symbol: CryptoName;
  theme: CryptoTheme;
  aliases: readonly CryptoAlias[];
};

export type CryptoRegistry = Record<CryptoName, CryptoRegistryItem>;

export type CryptoResolved = CryptoRegistryItem;

export type CryptoInput = CryptoName | (string & {});

export type CryptoIconComponent = ComponentType<any>;

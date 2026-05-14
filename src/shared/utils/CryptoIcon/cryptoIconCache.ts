import { TokenBTC, TokenETH, TokenSOL } from "@web3icons/react";
import type { ComponentType } from "react";

type IconComponent = ComponentType<any>;

const iconCache = new Map<string, IconComponent>();

// preload популярных иконок
export function preloadCryptoIcons() {
  iconCache.set("BTC", TokenBTC);
  iconCache.set("ETH", TokenETH);
  iconCache.set("SOL", TokenSOL);
}

// быстрый getter
export function getCryptoIcon(symbol: string): IconComponent {
  return iconCache.get(symbol.toUpperCase()) ?? TokenETH;
}

import { cryptoRegistry } from "./crypto.registry";
import type { CryptoResolved, CryptoTheme } from "./crypto.types";

// Строим индекс один раз при загрузке модуля, не при каждом вызове
const aliasIndex: Record<string, keyof typeof cryptoRegistry> =
  Object.fromEntries(
    Object.values(cryptoRegistry).flatMap((c) =>
      c.aliases.map((a) => [a.toLowerCase(), c.symbol]),
    ),
  ) as Record<string, keyof typeof cryptoRegistry>;

const DEFAULT_THEME: CryptoTheme = {
  color: "rgba(156, 163, 175, 1)",
  bgColor: "bg-[rgba(156,163,175,0.12)]",
  borderColor: "border-[rgba(156,163,175,0.3)]",
};

export function getCrypto(input: string): CryptoResolved {
  const key = aliasIndex[input.toLowerCase()];
  return cryptoRegistry[key] ?? cryptoRegistry.BTC;
}

export function getCryptoTheme(input: string): CryptoTheme {
  return getCrypto(input)?.theme ?? DEFAULT_THEME;
}

export function getCryptoSymbol(input: string): string {
  return getCrypto(input).symbol;
}

export function getCryptoAlias(symbol: string): string {
  const crypto =
    cryptoRegistry[symbol.toUpperCase() as keyof typeof cryptoRegistry];

  const alias = crypto?.aliases[0] ?? symbol;

  return alias.charAt(0).toUpperCase() + alias.slice(1);
}

import { cryptoRegistry } from "./crypto.registry";

import type { CryptoResolved, CryptoTheme } from "./crypto.types";

const aliasIndex: Record<string, keyof typeof cryptoRegistry> =
  Object.fromEntries(
    Object.values(cryptoRegistry).flatMap((c) =>
      c.aliases.map((a) => [a.toLowerCase(), c.symbol]),
    ),
  ) as Record<string, keyof typeof cryptoRegistry>;

export function getCrypto(input: string): CryptoResolved {
  const key = aliasIndex[input.toLowerCase()];

  return cryptoRegistry[key] ?? cryptoRegistry.BTC;
}

export function getCryptoTheme(input: string): CryptoTheme {
  return getCrypto(input).theme;
}

export function getCryptoSymbol(input: string) {
  return getCrypto(input).symbol;
}

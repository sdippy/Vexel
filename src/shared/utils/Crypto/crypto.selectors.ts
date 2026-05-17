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

export function getCryptoIcon(name: string) {
  return getCrypto(name).icon;
}

const defaultTheme: CryptoTheme = {
  bgColor: "rgba(156, 163, 175, 0.12)",
  borderColor: "rgba(156, 163, 175, 0.3)",
  color: "rgba(156, 163, 175, 1)",
};

export function getCryptoTheme(name: string): CryptoTheme {
  const c = getCrypto(name);

  return c?.theme ?? defaultTheme;
}

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

export function generateCryptoColor(value: string): string {
  let hash = 0;

  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = Math.abs(hash) % 360;

  const saturation = 70;
  const lightness = 60;

  const s = saturation / 100;
  const l = lightness / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((hue / 60) % 2 - 1));
  const m = l - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (hue < 60) {
    r = c;
    g = x;
  } else if (hue < 120) {
    r = x;
    g = c;
  } else if (hue < 180) {
    g = c;
    b = x;
  } else if (hue < 240) {
    g = x;
    b = c;
  } else if (hue < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }

  const toHex = (value: number) =>
    Math.round((value + m) * 255)
      .toString(16)
      .padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

export function getCryptoColor(
  input: string,
): string {
  const crypto = cryptoRegistry[
    input.toUpperCase() as keyof typeof cryptoRegistry
  ];

  if (crypto) {
    return crypto.theme.color;
  }

  return generateCryptoColor(input);
}
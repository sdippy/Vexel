export function getCurrentPrice(data: number[]) {
  return data[data.length - 1];
}

export function getCurrentPriceFormat(data: number[]) {
  return data[data.length - 1].toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function getPreviousPrice(data: number[]) {
  return data[0];
}

export function getPriceChange(
  currentPrice: number,
  previousPrice: number,
) {
  const change =
    ((currentPrice - previousPrice) / previousPrice) * 100;

  const normalized = Math.abs(change) < 0.005 ? 0 : change;
  const sign = normalized > 0 ? "+" : "";

  return `${sign}${normalized.toFixed(2)}%`;
}

export function getPriceColor(
  currentPrice: number,
  previousPrice: number,
) {
  return currentPrice >= previousPrice
    ? "text-[#4AE176]"
    : "text-[#FFB4AB]";
}
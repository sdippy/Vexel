export function getPriceChange(
  change: number,
): string {
  if (change > 0) {
    return `+${change.toFixed(2)}%`;
  }

  return `${change.toFixed(2)}%`;
}

export function getPriceColor(
  change: number,
): string {
  if (change > 0) {
    return "text-[#4AE176]";
  }

  if (change < 0) {
    return "text-[#FFB4AB]";
  }

  return "text-[#C2C6D6]";
}
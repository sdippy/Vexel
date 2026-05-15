export function getSparklinePoints(data: number[]) {
  const max = Math.max(...data);
  const min = Math.min(...data);

  return data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;

      const y = 100 - ((value - min) / (max - min || 1)) * 100;

      return `${x},${y}`;
    })
    .join(" ");
}

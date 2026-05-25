import type { MarketNews } from "@/shared/types";

export function getTopTopics(data: MarketNews[], limit = 3) {
  const map: Record<string, number> = {};

  const addWords = (text: string, weight: number) => {
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .split(/\s+/)
      .forEach((word) => {
        if (!word || word.length < 4) return;

        map[word] = (map[word] || 0) + weight;
      });
  };

  data.forEach((item) => {
    addWords(item.topic, 5);
    addWords(item.label, 3);
    addWords(item.description, 1);
  });

  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([word, count]) => ({
      word,
      count,
    }));
}

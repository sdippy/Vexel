import type { NewsRegistry } from "./news.types";

export const newsRegistry: NewsRegistry = {
  BULLISH: {
    symbol: "BULLISH",
    theme: {
      color: "text-[#4AE176]",
      bgColor: "bg-[#00B954]/20",
      borderColor: "border-[#4AE176]/20",
    },
    aliases: ["bullish", "positive", "optimistic"],
  },
  BEARISH: {
    symbol: "BEARISH",
    theme: {
      color: "text-[#FFB4AB]",
      bgColor: "bg-[#FFB4AB]/20",
      borderColor: "border-[#FFB4AB]/20",
    },
    aliases: ["bearish", "negative", "pessimistic"],
  },
  NEUTRAL: {
    symbol: "NEUTRAL",
    theme: {
      color: "text-[#C2C6D6]",
      bgColor: "bg-[#32353C]",
      borderColor: "border-[#FFFFFF]/10",
    },
    aliases: ["neutral", "mixed", "balanced"],
  },
  BREAKING: {
    symbol: "BREAKING",
    theme: {
      color: "text-[#FFFFFF]",
      bgColor: "bg-[#000000]/60",
      borderColor: "border-[#FFFFFF]/10",
    },
    aliases: ["breaking", "urgent", "important"],
  },
};

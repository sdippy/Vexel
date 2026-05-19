import type { NotificationRegistry } from "./notification.types";

import { ChartColumnIncreasing, Droplet, TriangleAlert } from "lucide-react";

export const notificationRegistry: NotificationRegistry = {
  "PRICE BREAKOUT": {
    symbol: "PRICE BREAKOUT",
    icon: ChartColumnIncreasing,
    theme: {
      color: "#4AE176",
      textColor: "text-[#4AE176]",
      bgColor: "bg-[#4AE176]/10",
      borderColor: "border-[#4AE176]/20",
    },
    aliases: ["price breakout", "breakout", "price surge", "volatility spike"],
  },
  "LIQUIDITY SIGNAL": {
    symbol: "LIQUIDITY SIGNAL",
    icon: Droplet,
    theme: {
      color: "#ADC6FF",
      textColor: "text-[#ADC6FF]",
      bgColor: "bg-[#ADC6FF]/10",
      borderColor: "border-[#ADC6FF]/20",
    },
    aliases: [
      "liquidity signal",
      "liquidity alert",
      "volume surge",
      "order book imbalance",
    ],
  },
  "DOWNSIDE RISK": {
    symbol: "DOWNSIDE RISK",
    icon: TriangleAlert,
    theme: {
      color: "#FF5451",
      textColor: "text-[#FF5451]",
      bgColor: "bg-[#FF5451]/10",
      borderColor: "border-[#FF5451]/20",
    },
    aliases: [
      "downside risk",
      "risk alert",
      "price drop warning",
      "volatility warning",
    ],
  },
};

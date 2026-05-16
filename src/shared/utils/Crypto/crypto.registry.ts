import type { CryptoRegistry } from "./crypto.types";

import {
  TokenBTC,
  TokenETH,
  TokenSOL,
  TokenUSDT,
  TokenUSDC,
  TokenBNB,
  TokenXRP,
  TokenADA,
  TokenDOGE,
  TokenTON,
  TokenTRX,
  TokenDOT,
  TokenAVAX,
  TokenLINK,
  TokenMATIC,
  TokenSHIB,
  TokenLTC,
  TokenBCH,
  TokenUNI,
  TokenATOM,
} from "@web3icons/react";

export const cryptoRegistry: CryptoRegistry = {
  BTC: {
    symbol: "BTC",
    icon: TokenBTC,
    theme: {
      color: "#F7931A",
      bgColor: "bg-[#F7931A]/20",
      borderColor: "border-[#F7931A]/30",
    },
    aliases: ["bitcoin", "btc"],
  },

  ETH: {
    symbol: "ETH",
    icon: TokenETH,
    theme: {
      color: "#627EEA",
      bgColor: "bg-[#627EEA]/20",
      borderColor: "border-[#627EEA]/30",
    },
    aliases: ["ethereum", "eth"],
  },

  SOL: {
    symbol: "SOL",
    icon: TokenSOL,
    theme: {
      color: "#14F195",
      bgColor: "bg-[#14F195]/20",
      borderColor: "border-[#14F195]/30",
    },
    aliases: ["solana", "sol"],
  },

  USDT: {
    symbol: "USDT",
    icon: TokenUSDT,
    theme: {
      color: "#26A17B",
      bgColor: "bg-[#26A17B]/20",
      borderColor: "border-[#26A17B]/30",
    },
    aliases: ["tether", "usdt"],
  },

  USDC: {
    symbol: "USDC",
    icon: TokenUSDC,
    theme: {
      color: "#2775CA",
      bgColor: "bg-[#2775CA]/20",
      borderColor: "border-[#2775CA]/30",
    },
    aliases: ["usdcoin", "usdc"],
  },

  BNB: {
    symbol: "BNB",
    icon: TokenBNB,
    theme: {
      color: "#F3BA2F",
      bgColor: "bg-[#F3BA2F]/20",
      borderColor: "border-[#F3BA2F]/30",
    },
    aliases: ["binancecoin", "bnb"],
  },

  XRP: {
    symbol: "XRP",
    icon: TokenXRP,
    theme: {
      color: "#23292F",
      bgColor: "bg-[#23292F]/20",
      borderColor: "border-[#23292F]/30",
    },
    aliases: ["ripple", "xrp"],
  },

  ADA: {
    symbol: "ADA",
    icon: TokenADA,
    theme: {
      color: "#0033AD",
      bgColor: "bg-[#0033AD]/20",
      borderColor: "border-[#0033AD]/30",
    },
    aliases: ["cardano", "ada"],
  },

  DOGE: {
    symbol: "DOGE",
    icon: TokenDOGE,
    theme: {
      color: "#C2A633",
      bgColor: "bg-[#C2A633]/20",
      borderColor: "border-[#C2A633]/30",
    },
    aliases: ["dogecoin", "doge"],
  },

  TON: {
    symbol: "TON",
    icon: TokenTON,
    theme: {
      color: "#0098EA",
      bgColor: "bg-[#0098EA]/20",
      borderColor: "border-[#0098EA]/30",
    },
    aliases: ["toncoin", "ton"],
  },

  TRX: {
    symbol: "TRX",
    icon: TokenTRX,
    theme: {
      color: "#FF060A",
      bgColor: "bg-[#FF060A]/20",
      borderColor: "border-[#FF060A]/30",
    },
    aliases: ["tron", "trx"],
  },

  DOT: {
    symbol: "DOT",
    icon: TokenDOT,
    theme: {
      color: "#E6007A",
      bgColor: "bg-[#E6007A]/20",
      borderColor: "border-[#E6007A]/30",
    },
    aliases: ["polkadot", "dot"],
  },

  AVAX: {
    symbol: "AVAX",
    icon: TokenAVAX,
    theme: {
      color: "#E84142",
      bgColor: "bg-[#E84142]/20",
      borderColor: "border-[#E84142]/30",
    },
    aliases: ["avalanche", "avax"],
  },

  LINK: {
    symbol: "LINK",
    icon: TokenLINK,
    theme: {
      color: "#2A5ADA",
      bgColor: "bg-[#2A5ADA]/20",
      borderColor: "border-[#2A5ADA]/30",
    },
    aliases: ["chainlink", "link"],
  },

  MATIC: {
    symbol: "MATIC",
    icon: TokenMATIC,
    theme: {
      color: "#8247E5",
      bgColor: "bg-[#8247E5]/20",
      borderColor: "border-[#8247E5]/30",
    },
    aliases: ["polygon", "matic"],
  },

  SHIB: {
    symbol: "SHIB",
    icon: TokenSHIB,
    theme: {
      color: "#F00500",
      bgColor: "bg-[#F00500]/20",
      borderColor: "border-[#F00500]/30",
    },
    aliases: ["shiba", "shib"],
  },

  LTC: {
    symbol: "LTC",
    icon: TokenLTC,
    theme: {
      color: "#345D9D",
      bgColor: "bg-[#345D9D]/20",
      borderColor: "border-[#345D9D]/30",
    },
    aliases: ["litecoin", "ltc"],
  },

  BCH: {
    symbol: "BCH",
    icon: TokenBCH,
    theme: {
      color: "#8DC351",
      bgColor: "bg-[#8DC351]/20",
      borderColor: "border-[#8DC351]/30",
    },
    aliases: ["bitcoin_cash", "bch"],
  },

  UNI: {
    symbol: "UNI",
    icon: TokenUNI,
    theme: {
      color: "#FF007A",
      bgColor: "bg-[#FF007A]/20",
      borderColor: "border-[#FF007A]/30",
    },
    aliases: ["uniswap", "uni"],
  },

  ATOM: {
    symbol: "ATOM",
    icon: TokenATOM,
    theme: {
      color: "#2E3148",
      bgColor: "bg-[#2E3148]/20",
      borderColor: "border-[#2E3148]/30",
    },
    aliases: ["cosmos", "atom"],
  },
};

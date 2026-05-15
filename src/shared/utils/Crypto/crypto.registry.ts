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
      bgColor: "bg-[#F7931A]/20",
      borderColor: "border-[#F7931A]/30",
    },
    aliases: ["bitcoin", "btc"],
  },

  ETH: {
    symbol: "ETH",
    icon: TokenETH,
    theme: {
      bgColor: "bg-[#627EEA]/20",
      borderColor: "border-[#627EEA]/30",
    },
    aliases: ["ethereum", "eth"],
  },

  SOL: {
    symbol: "SOL",
    icon: TokenSOL,
    theme: {
      bgColor: "bg-[#14F195]/20",
      borderColor: "border-[#14F195]/30",
    },
    aliases: ["solana", "sol"],
  },

  USDT: {
    symbol: "USDT",
    icon: TokenUSDT,
    theme: {
      bgColor: "bg-[#26A17B]/20",
      borderColor: "border-[#26A17B]/30",
    },
    aliases: ["tether", "usdt"],
  },

  USDC: {
    symbol: "USDC",
    icon: TokenUSDC,
    theme: {
      bgColor: "bg-[#2775CA]/20",
      borderColor: "border-[#2775CA]/30",
    },
    aliases: ["usdcoin", "usdc"],
  },

  BNB: {
    symbol: "BNB",
    icon: TokenBNB,
    theme: {
      bgColor: "bg-[#F3BA2F]/20",
      borderColor: "border-[#F3BA2F]/30",
    },
    aliases: ["binancecoin", "bnb"],
  },

  XRP: {
    symbol: "XRP",
    icon: TokenXRP,
    theme: {
      bgColor: "bg-[#23292F]/20",
      borderColor: "border-[#23292F]/30",
    },
    aliases: ["ripple", "xrp"],
  },

  ADA: {
    symbol: "ADA",
    icon: TokenADA,
    theme: {
      bgColor: "bg-[#0033AD]/20",
      borderColor: "border-[#0033AD]/30",
    },
    aliases: ["cardano", "ada"],
  },

  DOGE: {
    symbol: "DOGE",
    icon: TokenDOGE,
    theme: {
      bgColor: "bg-[#C2A633]/20",
      borderColor: "border-[#C2A633]/30",
    },
    aliases: ["dogecoin", "doge"],
  },

  TON: {
    symbol: "TON",
    icon: TokenTON,
    theme: {
      bgColor: "bg-[#0098EA]/20",
      borderColor: "border-[#0098EA]/30",
    },
    aliases: ["toncoin", "ton"],
  },

  TRX: {
    symbol: "TRX",
    icon: TokenTRX,
    theme: {
      bgColor: "bg-[#FF060A]/20",
      borderColor: "border-[#FF060A]/30",
    },
    aliases: ["tron", "trx"],
  },

  DOT: {
    symbol: "DOT",
    icon: TokenDOT,
    theme: {
      bgColor: "bg-[#E6007A]/20",
      borderColor: "border-[#E6007A]/30",
    },
    aliases: ["polkadot", "dot"],
  },

  AVAX: {
    symbol: "AVAX",
    icon: TokenAVAX,
    theme: {
      bgColor: "bg-[#E84142]/20",
      borderColor: "border-[#E84142]/30",
    },
    aliases: ["avalanche", "avax"],
  },

  LINK: {
    symbol: "LINK",
    icon: TokenLINK,
    theme: {
      bgColor: "bg-[#2A5ADA]/20",
      borderColor: "border-[#2A5ADA]/30",
    },
    aliases: ["chainlink", "link"],
  },

  MATIC: {
    symbol: "MATIC",
    icon: TokenMATIC,
    theme: {
      bgColor: "bg-[#8247E5]/20",
      borderColor: "border-[#8247E5]/30",
    },
    aliases: ["polygon", "matic"],
  },

  SHIB: {
    symbol: "SHIB",
    icon: TokenSHIB,
    theme: {
      bgColor: "bg-[#F00500]/20",
      borderColor: "border-[#F00500]/30",
    },
    aliases: ["shiba", "shib"],
  },

  LTC: {
    symbol: "LTC",
    icon: TokenLTC,
    theme: {
      bgColor: "bg-[#345D9D]/20",
      borderColor: "border-[#345D9D]/30",
    },
    aliases: ["litecoin", "ltc"],
  },

  BCH: {
    symbol: "BCH",
    icon: TokenBCH,
    theme: {
      bgColor: "bg-[#8DC351]/20",
      borderColor: "border-[#8DC351]/30",
    },
    aliases: ["bitcoin_cash", "bch"],
  },

  UNI: {
    symbol: "UNI",
    icon: TokenUNI,
    theme: {
      bgColor: "bg-[#FF007A]/20",
      borderColor: "border-[#FF007A]/30",
    },
    aliases: ["uniswap", "uni"],
  },

  ATOM: {
    symbol: "ATOM",
    icon: TokenATOM,
    theme: {
      bgColor: "bg-[#2E3148]/20",
      borderColor: "border-[#2E3148]/30",
    },
    aliases: ["cosmos", "atom"],
  },
};

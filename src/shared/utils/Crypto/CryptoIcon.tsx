import { memo } from "react";

import { cryptoIcons } from "./crypto.icons";
import { FallbackTokenIcon } from "./fallback-icons";

type Props = {
  symbol: string;
  className?: string;
};

export const CryptoIcon = memo(({ symbol, className }: Props) => {
  const Icon = cryptoIcons[symbol];

  if (!Icon) {
    return <FallbackTokenIcon symbol={symbol} className={className} />;
  }

  return <Icon variant="branded" className={className} />;
});

CryptoIcon.displayName = "CryptoIcon";

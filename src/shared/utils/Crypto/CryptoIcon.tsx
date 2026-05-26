import { memo, lazy, Suspense } from "react";
import { FallbackTokenIcon } from "./fallback-icons";

type TVariant = "mono" | "branded" | "background";

type Props = {
  symbol: string;
  variant?: TVariant;
  size?: number | string;
  color?: string;
  className?: string;
};

const LazyRenderer = lazy(() => import("./CryptoIconRenderer"));

export const CryptoIcon = memo(
  ({ symbol, variant = "branded", size, color, className }: Props) => (
    <Suspense
      fallback={<FallbackTokenIcon symbol={symbol} className={className} />}
    >
      <LazyRenderer
        symbol={symbol}
        variant={variant}
        size={size}
        color={color}
        className={className}
      />
    </Suspense>
  ),
);

CryptoIcon.displayName = "CryptoIcon";

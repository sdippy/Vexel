/**
 * CryptoIconRenderer.tsx
 *
 * Из документации @web3icons/react:
 * - Индивидуальные импорты (TokenBTC и др.) TREE-SHAKEABLE — в prod только нужные иконки
 * - Dynamic компоненты (TokenIcon из /dynamic) НЕ tree-shakeable — не используем
 * - Пропсы: variant?: 'mono' | 'branded' | 'background', size?, color?, className?
 * - Компоненты расширяют SVGSVGElement (ForwardRefExoticComponent<SVGSVGElement>)
 *
 * Почему ComponentType<any> для словаря:
 * TokenBTC и др. расширяют SVGSVGElement со всеми его пропсами (~200 штук).
 * Присвоить их в Record<string, ComponentType<{variant, className}>> нельзя —
 * TS ругается на несовместимость типов параметров.
 * ComponentType<any> здесь безопасно: мы передаём только задокументированные пропсы.
 */

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
import type { ComponentType } from "react";

// Из доков: три допустимых варианта
type TVariant = "mono" | "branded" | "background";

// ComponentType<any> — намеренно, см. комментарий выше
const icons: Record<string, ComponentType<any>> = {
  BTC: TokenBTC,
  ETH: TokenETH,
  SOL: TokenSOL,
  USDT: TokenUSDT,
  USDC: TokenUSDC,
  BNB: TokenBNB,
  XRP: TokenXRP,
  ADA: TokenADA,
  DOGE: TokenDOGE,
  TON: TokenTON,
  TRX: TokenTRX,
  DOT: TokenDOT,
  AVAX: TokenAVAX,
  LINK: TokenLINK,
  MATIC: TokenMATIC,
  SHIB: TokenSHIB,
  LTC: TokenLTC,
  BCH: TokenBCH,
  UNI: TokenUNI,
  ATOM: TokenATOM,
};

type Props = {
  symbol: string;
  variant?: TVariant;
  size?: number | string;
  color?: string; // из доков: любой валидный CSS-цвет
  className?: string;
};

export default function CryptoIconRenderer({
  symbol,
  variant = "branded",
  size,
  color,
  className,
}: Props) {
  const Icon = icons[symbol];
  if (!Icon) return null;
  return (
    <Icon variant={variant} size={size} color={color} className={className} />
  );
}

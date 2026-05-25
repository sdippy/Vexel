type Props = {
  symbol: string;
  className?: string;
};

export function FallbackTokenIcon({ symbol, className }: Props) {
  return (
    <div
      className={`
        flex items-center justify-center
        rounded-full
        bg-white/10
        text-[10px]
        font-bold
        uppercase
        ${className}
      `}
    >
      {symbol.slice(0, 2)}
    </div>
  );
}

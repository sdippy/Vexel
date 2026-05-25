import { memo, useEffect, useMemo, useRef } from "react";

type Props = {
  chartData: number[];
  width?: number;
  height?: number;
};

function SparklineChart({ chartData, width = 64, height = 20 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const stopAnimation = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  };

  const processed = useMemo(() => {
    if (!chartData || chartData.length < 2) return null;

    let min = Infinity;
    let max = -Infinity;

    for (const v of chartData) {
      if (v < min) min = v;
      if (v > max) max = v;
    }

    const range = max - min || 1;
    const stepX = chartData.length > 1 ? width / (chartData.length - 1) : 0;

    let upwardMoves = 0;
    let downwardMoves = 0;

    for (let i = 1; i < chartData.length; i++) {
      const diff = chartData[i] - chartData[i - 1];
      if (Math.abs(diff) < 0.0001) continue;
      diff > 0 ? upwardMoves++ : downwardMoves++;
    }

    const isPositive = upwardMoves >= downwardMoves;
    const color = isPositive ? "#4AE176" : "#FFB4AB";

    const points = chartData.map((v, i) => ({
      x: i * stepX,
      y: height - ((v - min) / range) * height,
    }));

    return { points, color, isPositive };
  }, [chartData, width, height]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    stopAnimation();
    startRef.current = null;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (!processed) return;

    const { points, color, isPositive } = processed;

    const draw = (t: number) => {
      if (!startRef.current) startRef.current = t;

      const progress = Math.min((t - startRef.current) / 600, 1);

      ctx.clearRect(0, 0, width, height);

      ctx.save();

      // AREA
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(
        0,
        isPositive ? "rgba(74,225,118,0.35)" : "rgba(255,180,171,0.35)",
      );
      gradient.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.moveTo(points[0].x, height);

      for (const p of points) {
        ctx.lineTo(p.x, p.y);
      }

      ctx.lineTo(points[points.length - 1].x, height);
      ctx.closePath();
      ctx.fill();

      // glow line
      ctx.globalAlpha = 0.12;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;

      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();

      // main animated line
      ctx.globalAlpha = 1;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";

      ctx.beginPath();

      const drawUntil = progress * (points.length - 1);

      for (let i = 0; i < points.length - 1; i++) {
        if (i > drawUntil) break;

        const p1 = points[i];
        const p2 = points[i + 1];

        const segment = Math.min(1, drawUntil - i);

        const x = p1.x + (p2.x - p1.x) * segment;
        const y = p1.y + (p2.y - p1.y) * segment;

        i === 0 ? ctx.moveTo(p1.x, p1.y) : ctx.lineTo(x, y);
      }

      ctx.stroke();

      ctx.restore();

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(draw);
      }
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => stopAnimation();
  }, [processed, width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width,
        height,
        display: "block",
      }}
    />
  );
}

export default memo(SparklineChart);

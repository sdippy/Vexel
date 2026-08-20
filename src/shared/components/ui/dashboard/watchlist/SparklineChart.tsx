import { memo, useEffect, useMemo, useRef, useState } from "react";

type Props = {
  chartData: number[];
  width?: number | string;
  height?: number;
};

function SparklineChart({ chartData, width = "100%", height = 20 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const [actualWidth, setActualWidth] = useState(
    typeof width === "number" ? width : 0,
  );

  /*
   * Определяем, нужно ли использовать
   * ширину родительского контейнера.
   */
  const isFullWidth =
    width === "full" || width === "100%" || typeof width === "string";

  /*
   * Следим за изменением ширины контейнера.
   */
  useEffect(() => {
    const container = containerRef.current;

    if (!container || !isFullWidth) {
      return;
    }

    const updateWidth = () => {
      const containerWidth = container.clientWidth;

      if (containerWidth > 0) {
        setActualWidth(containerWidth);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [isFullWidth]);

  /*
   * Если width — число,
   * используем его напрямую.
   */
  useEffect(() => {
    if (typeof width === "number") {
      setActualWidth(width);
    }
  }, [width]);

  /*
   * Останавливаем текущую анимацию.
   */
  const stopAnimation = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  };

  /*
   * Рассчитываем точки графика.
   */
  const processed = useMemo(() => {
    if (!chartData || chartData.length < 2 || actualWidth <= 0) {
      return null;
    }

    let min = Infinity;
    let max = -Infinity;

    for (const value of chartData) {
      if (value < min) {
        min = value;
      }

      if (value > max) {
        max = value;
      }
    }

    const range = max - min || 1;

    const stepX = actualWidth / (chartData.length - 1);

    /*
     * Определяем направление графика
     * по первой и последней цене.
     */
    const firstValue = chartData[0];
    const lastValue = chartData[chartData.length - 1];

    const isPositive = lastValue >= firstValue;

    const color = isPositive ? "#4AE176" : "#FFB4AB";

    const points = chartData.map((value, index) => ({
      x: index * stepX,
      y: height - ((value - min) / range) * height,
    }));

    return {
      points,
      color,
      isPositive,
    };
  }, [chartData, actualWidth, height]);

  /*
   * Рисуем Canvas.
   */
  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || !processed || actualWidth <= 0) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    stopAnimation();

    startRef.current = null;

    const dpr = window.devicePixelRatio || 1;

    /*
     * Реальный размер Canvas
     * с учетом Retina.
     */
    canvas.width = actualWidth * dpr;
    canvas.height = height * dpr;

    /*
     * CSS-размер Canvas.
     */
    canvas.style.width = `${actualWidth}px`;
    canvas.style.height = `${height}px`;

    /*
     * Масштабирование для Retina.
     */
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const { points, color, isPositive } = processed;

    const lastPoint = points[points.length - 1];

    const draw = (timestamp: number) => {
      if (startRef.current === null) {
        startRef.current = timestamp;
      }

      const progress = Math.min((timestamp - startRef.current) / 600, 1);

      ctx.clearRect(0, 0, actualWidth, height);

      ctx.save();

      /*
       * ========================
       * Gradient
       * ========================
       */

      const gradient = ctx.createLinearGradient(0, 0, 0, height);

      gradient.addColorStop(
        0,
        isPositive ? "rgba(74,225,118,0.25)" : "rgba(255,180,171,0.25)",
      );

      gradient.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = gradient;

      ctx.beginPath();

      ctx.moveTo(points[0].x, height);

      for (const point of points) {
        ctx.lineTo(point.x, point.y);
      }

      ctx.lineTo(lastPoint.x, height);

      ctx.closePath();

      ctx.fill();

      /*
       * ========================
       * Line
       * ========================
       */

      ctx.strokeStyle = color;

      ctx.lineWidth = 1.5;

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.beginPath();

      const drawUntil = progress * (points.length - 1);

      for (let i = 0; i < points.length - 1; i++) {
        if (i > drawUntil) {
          break;
        }

        const p1 = points[i];
        const p2 = points[i + 1];

        const segment = Math.min(1, drawUntil - i);

        if (i === 0) {
          ctx.moveTo(p1.x, p1.y);
        } else {
          ctx.lineTo(p1.x, p1.y);
        }

        ctx.lineTo(
          p1.x + (p2.x - p1.x) * segment,
          p1.y + (p2.y - p1.y) * segment,
        );
      }

      ctx.stroke();

      ctx.restore();

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(draw);
      }
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      stopAnimation();
    };
  }, [processed, actualWidth, height]);

  /*
   * Определяем CSS width контейнера.
   */
  const containerWidth =
    typeof width === "number"
      ? `${width}px`
      : width === "full"
        ? "100%"
        : width;

  return (
    <div
      ref={containerRef}
      style={{
        width: containerWidth,
        height: `${height}px`,
        maxWidth: "100%",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: `${height}px`,
          display: "block",
        }}
      />
    </div>
  );
}

export default memo(SparklineChart);

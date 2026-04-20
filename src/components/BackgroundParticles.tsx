import { useEffect, useRef } from "react";

type Layer = "back" | "mid" | "front";
type Shape = "dot" | "square" | "diamond" | "line";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  layer: Layer;
  shape: Shape;
  driftAmplitude: number;
  driftSpeed: number;
  phase: number;
  flickerAmplitude: number;
  flickerSpeed: number;
  glowAmplitude: number;
  glowSpeed: number;
};

const COLORS = [
  "rgba(0, 255, 136, 0.92)",
  "rgba(0, 217, 255, 0.92)",
  "rgba(77, 166, 255, 0.9)",
  "rgba(255, 255, 255, 0.42)",
] as const;

const LAYER_SPEED: Record<Layer, number> = {
  back: 0.45,
  mid: 0.82,
  front: 1.15,
};

const MAX_DPR = 2;

const chooseDirection = (): { vx: number; vy: number } => {
  const diagonalSpeed = 9 + Math.random() * 16;
  const axialSpeed = 10 + Math.random() * 18;
  const signX = Math.random() > 0.5 ? 1 : -1;
  const signY = Math.random() > 0.5 ? 1 : -1;

  const mode = Math.random();
  if (mode < 0.34) {
    return { vx: signX * axialSpeed, vy: 0 };
  }
  if (mode < 0.68) {
    return { vx: 0, vy: signY * axialSpeed };
  }

  return {
    vx: signX * diagonalSpeed,
    vy: signY * (diagonalSpeed * (0.7 + Math.random() * 0.4)),
  };
};

const createParticle = (width: number, height: number, layer: Layer): Particle => {
  const direction = chooseDirection();
  const flickerEnabled = Math.random() > 0.72;
  const glowEnabled = Math.random() > 0.82;
  const shapeRoll = Math.random();
  const shape: Shape =
    shapeRoll > 0.85
      ? "line"
      : shapeRoll > 0.6
      ? "diamond"
      : shapeRoll > 0.3
      ? "square"
      : "dot";

  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: direction.vx,
    vy: direction.vy,
    size: 0.9 + Math.random() * 2.3,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    layer,
    shape,
    driftAmplitude: 0.02 + Math.random() * 0.08,
    driftSpeed: 0.35 + Math.random() * 0.9,
    phase: Math.random() * Math.PI * 2,
    flickerAmplitude: flickerEnabled ? 0.1 + Math.random() * 0.25 : 0,
    flickerSpeed: flickerEnabled ? 0.6 + Math.random() * 2.1 : 0,
    glowAmplitude: glowEnabled ? 0.18 + Math.random() * 0.25 : 0,
    glowSpeed: glowEnabled ? 0.25 + Math.random() * 1.1 : 0,
  };
};

const getParticleCount = (width: number, height: number) => {
  const area = width * height;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1100;
  const density = isMobile ? 0.000035 : isTablet ? 0.000052 : 0.000072;

  return Math.max(95, Math.min(320, Math.round(area * density)));
};

const paintShape = (ctx: CanvasRenderingContext2D, particle: Particle, x: number, y: number, size: number) => {
  if (particle.shape === "dot") {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    return;
  }

  if (particle.shape === "line") {
    const length = size * 3.1;
    ctx.lineWidth = Math.max(0.65, size * 0.65);
    ctx.beginPath();
    ctx.moveTo(x - length * 0.5, y);
    ctx.lineTo(x + length * 0.5, y);
    ctx.stroke();
    return;
  }

  if (particle.shape === "square") {
    const d = size * 1.9;
    ctx.fillRect(x - d * 0.5, y - d * 0.5, d, d);
    return;
  }

  const d = size * 2.2;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(Math.PI / 4);
  ctx.fillRect(-d * 0.5, -d * 0.5, d, d);
  ctx.restore();
};

export const BackgroundParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles: Particle[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame = 0;
    let lastTime = performance.now();

    const setupCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;
      const total = getParticleCount(width, height);
      const backCount = Math.round(total * 0.42);
      const midCount = Math.round(total * 0.36);
      const frontCount = total - backCount - midCount;

      for (let i = 0; i < backCount; i += 1) {
        particles.push(createParticle(width, height, "back"));
      }
      for (let i = 0; i < midCount; i += 1) {
        particles.push(createParticle(width, height, "mid"));
      }
      for (let i = 0; i < frontCount; i += 1) {
        particles.push(createParticle(width, height, "front"));
      }
    };

    const render = (time: number) => {
      const deltaSeconds = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      for (const particle of particles) {
        const layerSpeed = LAYER_SPEED[particle.layer];
        const drift = Math.sin(time * 0.001 * particle.driftSpeed + particle.phase) * particle.driftAmplitude;
        particle.x += (particle.vx * layerSpeed + drift) * deltaSeconds;
        particle.y += (particle.vy * layerSpeed + drift * 0.75) * deltaSeconds;

        const overflow = 18;
        if (particle.x < -overflow) particle.x = width + overflow;
        if (particle.x > width + overflow) particle.x = -overflow;
        if (particle.y < -overflow) particle.y = height + overflow;
        if (particle.y > height + overflow) particle.y = -overflow;

        const flicker = particle.flickerAmplitude
          ? Math.sin(time * 0.001 * particle.flickerSpeed + particle.phase) * particle.flickerAmplitude
          : 0;
        const glowPulse = particle.glowAmplitude
          ? Math.max(0, Math.sin(time * 0.001 * particle.glowSpeed + particle.phase)) * particle.glowAmplitude
          : 0;

        const renderSize = Math.max(0.45, particle.size * (1 + flicker));
        ctx.fillStyle = particle.color;
        ctx.strokeStyle = particle.color;
        ctx.globalAlpha = 0.9;
        ctx.shadowBlur = glowPulse > 0 ? 8 + glowPulse * 16 : 0;
        ctx.shadowColor = particle.color;
        paintShape(ctx, particle, particle.x, particle.y, renderSize);
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      if (!prefersReducedMotion) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    setupCanvas();
    if (prefersReducedMotion) {
      render(lastTime);
    } else {
      animationFrame = window.requestAnimationFrame(render);
    }

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(setupCanvas, 120);
    };

    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="premium-background" aria-hidden="true">
      <div className="premium-background__base" />
      <canvas ref={canvasRef} className="premium-background__canvas" />
      <div className="premium-background__noise" />
    </div>
  );
};

export default BackgroundParticles;

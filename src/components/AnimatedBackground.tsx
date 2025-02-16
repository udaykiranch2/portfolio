import { useRef, useEffect } from 'react';
import { useTheme } from '@mui/material';

interface AnimatedBackgroundProps {
  variant?: 'mesh' | 'dots' | 'waves';
  opacity?: number;
  speed?: number;
  color?: string;
}

const AnimatedBackground = ({
  variant = 'mesh',
  opacity = 0.1,
  speed = 0.005,
  color
}: AnimatedBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const drawMesh = () => {
      const points = [];
      const density = 30;
      const spacing = canvas.width / density;

      for (let x = 0; x < canvas.width + spacing; x += spacing) {
        for (let y = 0; y < canvas.height + spacing; y += spacing) {
          const xOffset = Math.sin(t + y * 0.05) * 20;
          const yOffset = Math.cos(t + x * 0.05) * 20;
          points.push({ x: x + xOffset, y: y + yOffset });
        }
      }

      ctx.fillStyle = color || theme.palette.primary.main;
      ctx.globalAlpha = opacity;

      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawDots = () => {
      const points = [];
      const density = 20;
      const spacing = canvas.width / density;

      for (let x = 0; x < canvas.width + spacing; x += spacing) {
        for (let y = 0; y < canvas.height + spacing; y += spacing) {
          const xOffset = Math.sin(t + y * 0.03) * 10;
          const yOffset = Math.cos(t + x * 0.03) * 10;
          points.push({ x: x + xOffset, y: y + yOffset });
        }
      }

      ctx.fillStyle = color || theme.palette.primary.main;
      ctx.globalAlpha = opacity;

      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawWaves = () => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x++) {
        const y = Math.sin(x * 0.01 + t) * 30 + canvas.height / 2;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = color || theme.palette.primary.main;
      ctx.globalAlpha = opacity;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const animate = () => {
      t += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      switch (variant) {
        case 'dots':
          drawDots();
          break;
        case 'waves':
          drawWaves();
          break;
        default:
          drawMesh();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [variant, opacity, speed, color, theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default AnimatedBackground; 
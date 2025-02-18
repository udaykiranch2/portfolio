import { useRef, useEffect } from 'react';
import { useTheme } from '@mui/material';

const GradientBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let gradient: CanvasGradient;
    let t = 0;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const createGradient = () => {
      gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, theme.palette.primary.main + '33');
      gradient.addColorStop(0.5, theme.palette.background.default + '33');
      gradient.addColorStop(1, theme.palette.secondary.main + '33');
    };

    const animate = () => {
      t += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create moving mesh points
      const points = [];
      const density = 30;
      const spacing = canvas.width / density;

      for (let x = 0; x < canvas.width + spacing; x += spacing) {
        for (let y = 0; y < canvas.height + spacing; y += spacing) {
          const xOffset = Math.sin(t + y * 0.05) * 20;
          const yOffset = Math.cos(t + x * 0.05) * 20;
          points.push({
            x: x + xOffset,
            y: y + yOffset,
          });
        }
      }

      // Draw gradient mesh
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 0.1;

      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    createGradient();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.7,
        pointerEvents: 'none',
      }}
    />
  );
};

export default GradientBackground; 
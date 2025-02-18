import { useEffect, useRef } from 'react';
import { useTheme } from '@mui/material';

const NoiseOverlay = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let noiseAnimation: number;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const createNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        data[i] = data[i + 1] = data[i + 2] = noise;
        data[i + 3] = 10; // Very low opacity
      }

      return imageData;
    };

    const animate = () => {
      ctx.putImageData(createNoise(), 0, 0);
      noiseAnimation = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(noiseAnimation);
    };
  }, []);

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
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
        opacity: theme.palette.mode === 'dark' ? 0.05 : 0.02,
      }}
    />
  );
};

export default NoiseOverlay; 
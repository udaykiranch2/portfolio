import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import type { ISourceOptions, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "@mui/material";

const ParticleBackground = () => {
  const theme = useTheme();
  const [particlesOptions, setParticlesOptions] = useState<ISourceOptions | null>(null);

  useEffect(() => {
    const loadParticles = async (engine: Engine) => {
      await loadSlim(engine);
      setParticlesOptions({
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: theme.palette.primary.main },
          links: { color: theme.palette.primary.main, distance: 150, enable: true, opacity: 0.2, width: 1 },
          move: { enable: true, random: false, speed: 1, straight: false },
          number: { density: { enable: true, width: 800, height: 800 }, value: 80 },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
        },
      });
    };
    loadParticles({} as Engine); // ✅ Temporary fix for missing `engine`
  }, [theme.palette.primary.main]);

  return particlesOptions ? (
    <Particles
      id="tsparticles"
      options={particlesOptions}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  ) : null;
};

export default ParticleBackground;

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import { useTheme } from "@mui/material";

const HeroCanvas = () => {
  const theme = useTheme();

  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 5]} intensity={1} />
      <mesh>
        <Sphere args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial
            color={theme.palette.primary.main}
            attach="material"
            distort={0.4}
            speed={1.5}
            opacity={0.15}
          />
        </Sphere>
      </mesh>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default HeroCanvas; 
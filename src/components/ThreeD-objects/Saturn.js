import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

// Import Saturn Texture
import SaturnTexture from "../../assets/textures/8k_saturn.jpg";

function SaturnScene() {
  // Texture files
  const [SaturnMap] = useTexture([SaturnTexture]);
  const SaturnRef = useRef(null);

  useFrame(() => {
    SaturnRef.current.rotation.y += 0.0003; // Saturn rotation speed
  });

  return (
    <>
      <ambientLight intensity={2} />
      <mesh ref={SaturnRef}>
        <ambientLight color='#61adff' intensity={1}/>
        <sphereBufferGeometry attach="geometry" args={[2, 64, 32]} />
        <meshStandardMaterial 
          map={SaturnMap}
        />
      </mesh>
    </>
  );
}

export const Saturn = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <SaturnScene />
      </Suspense>
    </Canvas>
  );
};
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
    SaturnRef.current.rotation.y += 0.0005; // Saturn rotation speed
  });

  return (
    <>
      <ambientLight color={'#fffff'} intensity={0.8} />
      <mesh ref={SaturnRef}>
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
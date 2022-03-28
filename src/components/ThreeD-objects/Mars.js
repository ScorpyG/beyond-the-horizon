import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

// Import Mars Texture
import MarsTexture from "../../assets/textures/8k_mars.jpg";

function MarsScene() {
  // Texture files
  const [MarsMap] = useTexture([MarsTexture]);
  const MarsRef = useRef(null);

  useFrame(() => {
    MarsRef.current.rotation.y += 0.0005; // Mars rotation speed
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      <mesh ref={MarsRef}>
        <sphereBufferGeometry attach="geometry" args={[2, 64, 32]} />
        <meshStandardMaterial 
          map={MarsMap}
        />
      </mesh>
    </>
  );
}

export const Mars = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <MarsScene />
      </Suspense>
    </Canvas>
  );
};
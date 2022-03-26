import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

// Import Mercury Texture
import MercuryTexture from "../../assets/textures/8k_mercury.jpg";

function MercuryScene() {
  // Texture files
  const [MercuryMap] = useTexture([MercuryTexture]);
  const MercuryRef = useRef(null);

  useFrame(() => {
    MercuryRef.current.rotation.y += 0.0003; // Mercury rotation speed
  });

  return (
    <>
      <ambientLight intensity={2} />
      <mesh ref={MercuryRef}>
        <ambientLight color='#61adff' intensity={1}/>
        <sphereBufferGeometry attach="geometry" args={[2, 64, 32]} />
        <meshStandardMaterial 
          map={MercuryMap}
        />
      </mesh>
    </>
  );
}

export const Mercury = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <MercuryScene />
      </Suspense>
    </Canvas>
  );
};
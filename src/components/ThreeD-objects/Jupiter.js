import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

// Import Jupiter Texture
import JupiterTexture from "../../assets/textures/8k_jupiter.jpg";

function JupiterScene() {
  // Texture files
  const [JupiterMap] = useTexture([JupiterTexture]);
  const JupiterRef = useRef(null);

  useFrame(() => {
    JupiterRef.current.rotation.y += 0.0003; // Jupiter rotation speed
  });

  return (
    <>
      <ambientLight intensity={2} />
      <mesh ref={JupiterRef}>
        <ambientLight color='#61adff' intensity={1}/>
        <sphereBufferGeometry attach="geometry" args={[2, 64, 32]} />
        <meshStandardMaterial 
          map={JupiterMap}
        />
      </mesh>
    </>
  );
}

export const Jupiter = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <JupiterScene />
      </Suspense>
    </Canvas>
  );
};
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

// Import Uranus Texture
import UranusTexture from "../../assets/textures/2k_uranus.jpg";

function UranusScene() {
  // Texture files
  const [UranusMap] = useTexture([UranusTexture]);
  const UranusRef = useRef(null);

  useFrame(() => {
    UranusRef.current.rotation.y += 0.0003; // Uranus rotation speed
  });

  return (
    <>
      <ambientLight intensity={2} />
      <mesh ref={UranusRef}>
        <ambientLight color='#61adff' intensity={1}/>
        <sphereBufferGeometry attach="geometry" args={[2, 64, 32]} />
        <meshStandardMaterial 
          map={UranusMap}
        />
      </mesh>
    </>
  );
}

export const Uranus = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <UranusScene />
      </Suspense>
    </Canvas>
  );
};
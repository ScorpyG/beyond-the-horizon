import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

// Import Venus Texture
import VenusTexture from "../../assets/textures/8k_venus_surface.jpg";

function VenusScene() {
  // Texture files
  const [VenusMap] = useTexture([VenusTexture]);
  const VenusRef = useRef(null);

  useFrame(() => {
    VenusRef.current.rotation.y += 0.0005; // Venus rotation speed
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      <mesh ref={VenusRef}>
        <sphereBufferGeometry attach="geometry" args={[2, 64, 32]} />
        <meshStandardMaterial 
          map={VenusMap}
        />
      </mesh>
    </>
  );
}

export const Venus = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <VenusScene />
      </Suspense>
    </Canvas>
  );
};
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

// Import Neptune Texture
import NeptuneTexture from "../../assets/textures/2k_neptune.jpg";

function NeptuneScene() {
  // Texture files
  const [NeptuneMap] = useTexture([NeptuneTexture]);
  const NeptuneRef = useRef(null);

  useFrame(() => {
    NeptuneRef.current.rotation.y += 0.0003; // Neptune rotation speed
  });

  return (
    <>
      <ambientLight intensity={2} />
      <mesh ref={NeptuneRef}>
        <ambientLight color='#61adff' intensity={1}/>
        <sphereBufferGeometry attach="geometry" args={[2, 64, 32]} />
        <meshStandardMaterial 
          map={NeptuneMap}
        />
      </mesh>
    </>
  );
}

export const Neptune = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <NeptuneScene />
      </Suspense>
    </Canvas>
  );
};
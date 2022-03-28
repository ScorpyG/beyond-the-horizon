import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

// Import Sun Texture
import SunTexture from "../../assets/textures/8k_sun.jpg";

function SunScene() {
  // Texture files
  const [SunMap] = useTexture([SunTexture]);
  const sunRef = useRef(null);

  useFrame(() => {
    sunRef.current.rotation.y += 0.0005; // Sun rotation speed
  });

  return (
    <>
      <ambientLight intensity={2} />
      <mesh ref={sunRef}>
        <ambientLight color='#61adff' intensity={1}/>
        <sphereBufferGeometry attach="geometry" args={[2, 64, 32]} />
        <meshStandardMaterial 
          map={SunMap}
        />
      </mesh>
    </>
  );
}

export const Sun = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <SunScene />
      </Suspense>
    </Canvas>
  );
};

// Import necessary dependencies
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Import external textures
import EarthDayMap from "../../assets/textures/2k_earth_daymap.jpg";
import EarthCloudMap from "../../assets/textures/2k_earth_clouds.jpg";
import EarthSpecMap from "../../assets/textures/earthspec1k.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthBumpMap from "../../assets/textures/earthbump1k.jpg";

// Three.js Earth
function EarthScene() {
  // Texture files
  const [EarthMap, EcloudMap, EspecMap, EnormalMap, EbumpMap] = useTexture([
    EarthDayMap,
    EarthCloudMap,
    EarthSpecMap,
    EarthNormalMap,
    EarthBumpMap,
  ]);

  const earthRef = useRef();
  const cloudRef = useRef(null);

  // Auto rotation speed for earth and cloud
  useFrame(() => {
    cloudRef.current.rotation.y += 0.0002;  // Cloud rotation speed
    earthRef.current.rotation.x = 0.25; // Tilt on x-axis
    earthRef.current.rotation.y += 0.0003; // Earth rotation speed
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight color="#ffffff" position={[4, 3, 10]} intensity={3} />

      {/* Earth atmosphere */}
      <mesh ref={cloudRef}>
        {/* Import atmosphere texture into mesh */}
        <sphereBufferGeometry attach="geometry" args={[2.25, 64, 32]} />
        <meshPhongMaterial
          map={EcloudMap}
          opacity={0.5}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Earth */}
      <mesh ref={earthRef}>
        {/* Import object textures into mesh */}
        <sphereBufferGeometry attach="geometry" args={[2.2, 64, 32]} />
        <meshPhongMaterial specularMap={EspecMap} />
        <meshStandardMaterial
          map={EarthMap}
          normalMap={EnormalMap}
          bumpMap={EbumpMap}
        />
      </mesh>
    </>
  );
}

// JSX Earth component
export const Earth = () => {
  return (
    <Canvas className="hero-image">
      <Suspense fallback={null}>
        <EarthScene />
      </Suspense>
    </Canvas>
  );
};

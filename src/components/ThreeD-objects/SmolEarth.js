// Import necessary dependencies
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Import Earth textures
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
    cloudRef.current.rotation.y += 0.0003; // Cloud rotation speed
    earthRef.current.rotation.y += 0.0002; // Earth rotation speed
  });

  // Scene Objects
  return (
    <>
      {/* Overall Lighting */}
      <ambientLight intensity={0.8} />

      {/* Directional Lighting / Sun light*/}
      <pointLight color="#fff9d6" position={[5, 2, 10]} intensity={3} /> 

      {/* Earth atmosphere */}
      <mesh ref={cloudRef}>
        {/* Mesh Lighting */}
        <ambientLight color='#61adff' intensity={0.9}/>

        {/* Import atmosphere texture into mesh */}
        <sphereBufferGeometry attach="geometry" args={[2.03, 64, 32]} />
        <meshPhongMaterial
          map={EcloudMap}
          opacity={0.6}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Earth */}
      <mesh ref={earthRef}>
        {/* Mesh Lighting */}
        <hemisphereLightProbe color='#ffffff' intensity={1.2} />

        {/* Import object textures into mesh */}
        <sphereBufferGeometry attach="geometry" args={[2, 64, 32]} />
        <meshPhongMaterial specularMap={EspecMap} />
        <meshStandardMaterial
          map={EarthMap}
          normalMap={EnormalMap}
          bumpMap={EbumpMap}
        />

        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
          rotateSpeed={0.15}
          panSpeed={1}
          minPolarAngle={1}
          maxPolarAngle={2}
        />
      </mesh>
    </>
  );
}

// JSX Earth component
export const Earth = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <EarthScene />
      </Suspense>
    </Canvas>
  );
};

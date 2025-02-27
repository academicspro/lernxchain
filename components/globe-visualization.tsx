"use client";

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const officeLocations = [
  { name: "New York", lat: 40.7128, lng: -74.0060 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Sydney", lat: -33.8688, lng: 151.2093 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
];

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

function Globe() {
  const globeRef = useRef<THREE.Group>(null);
  const markersRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Earth */}
      <Sphere args={[1, 64, 64]}>
        <meshPhongMaterial
          color="#1a237e"
          emissive="#303f9f"
          emissiveIntensity={0.2}
          transparent
          opacity={0.9}
          wireframe
        />
      </Sphere>

      {/* Location Markers */}
      <group ref={markersRef}>
        {officeLocations.map((location, index) => {
          const position = latLngToVector3(location.lat, location.lng, 1);
          return (
            <group key={index} position={position}>
              <mesh>
                <sphereGeometry args={[0.02, 16, 16]} />
                <meshBasicMaterial color="#00ffff" />
              </mesh>
              <mesh>
                <sphereGeometry args={[0.03, 16, 16]} />
                <meshBasicMaterial
                  color="#00ffff"
                  transparent
                  opacity={0.3}
                  blending={THREE.AdditiveBlending}
                />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* Atmosphere */}
      <Sphere args={[1.1, 64, 64]}>
        <meshPhongMaterial
          color="#4a148c"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

export default function GlobeVisualization() {
  return (
    <div className="h-[600px] w-full relative">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Globe />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <div className="absolute top-4 left-4 space-y-2">
        {officeLocations.map((location) => (
          <div
            key={location.name}
            className="flex items-center gap-2 text-sm text-white/70"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            {location.name}
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";

import { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Convert latitude and longitude to 3D coordinates
const latLngToVector3 = (lat: number, lng: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  
  return new THREE.Vector3(x, y, z);
};

// Office locations
const officeLocations = [
  { name: "New York", lat: 40.7128, lng: -74.0060, color: "#00ffff", size: 0.03 },
  { name: "London", lat: 51.5074, lng: -0.1278, color: "#ff00ff", size: 0.03 },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, color: "#ffff00", size: 0.03 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, color: "#00ff00", size: 0.03 },
  { name: "Sydney", lat: -33.8688, lng: 151.2093, color: "#ff0000", size: 0.03 },
  { name: "Berlin", lat: 52.5200, lng: 13.4050, color: "#0000ff", size: 0.03 },
  { name: "San Francisco", lat: 37.7749, lng: -122.4194, color: "#ff8800", size: 0.03 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708, color: "#88ff00", size: 0.03 },
];

interface LocationMarkerProps {
  position: THREE.Vector3;
  color: string;
  size: number;
  name: string;
  isHovered: boolean;
  onClick: () => void;
}

function LocationMarker({ position, color, size, name, isHovered, onClick }: LocationMarkerProps) {
  const ref = useRef<THREE.Mesh>(null);
  
  useEffect(() => {
    if (ref.current) {
      ref.current.lookAt(0, 0, 0);
    }
  }, []);
  
  return (
    <mesh position={position} ref={ref} onClick={onClick}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={isHovered ? 2 : 0.5}
      />
      {isHovered && (
        <Sphere args={[size * 1.3, 16, 16]}>
          <meshBasicMaterial color={color} transparent opacity={0.2} />
        </Sphere>
      )}
    </mesh>
  );
}

interface ConnectionProps {
  start: THREE.Vector3;
  end: THREE.Vector3;
  progress: number;
}

function Connection({ start, end, progress }: ConnectionProps) {
  const curve = new THREE.QuadraticBezierCurve3(
    start,
    new THREE.Vector3(
      (start.x + end.x) * 0.5,
      (start.y + end.y) * 0.5,
      (start.z + end.z) * 0.5 + 0.5
    ),
    end
  );
  
  const points = curve.getPoints(50);
  const visiblePoints = points.slice(0, Math.floor(points.length * progress));
  
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={visiblePoints.length}
          array={new Float32Array(visiblePoints.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#00ffff" linewidth={1} />
    </line>
  );
}

function Globe() {
  const globeRef = useRef<THREE.Group>(null);
  const markersRef = useRef<THREE.Group>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [connections, setConnections] = useState<Array<{start: THREE.Vector3, end: THREE.Vector3, progress: number}>>([]);
  
  useEffect(() => {
    // Create connections between random offices
    const newConnections: Array<{start: THREE.Vector3, end: THREE.Vector3, progress: number}> = [];
    
    // Connect New York to other offices
    const nyPosition = latLngToVector3(officeLocations[0].lat, officeLocations[0].lng, 1);
    
    for (let i = 1; i < 4; i++) {
      const targetPosition = latLngToVector3(
        officeLocations[i].lat,
        officeLocations[i].lng,
        1
      );
      
      newConnections.push({
        start: nyPosition,
        end: targetPosition,
        progress: 0
      });
    }
    
    setConnections(newConnections);
    
    // Animate connections
    const interval = setInterval(() => {
      setConnections(prev => 
        prev.map(conn => ({
          ...conn,
          progress: Math.min(conn.progress + 0.01, 1)
        }))
      );
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
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
          const isHovered = hoveredLocation === location.name;
          const isSelected = selectedLocation === location.name;
          
          return (
            <LocationMarker
              key={index}
              position={position}
              color={location.color}
              size={location.size * (isSelected ? 1.5 : 1)}
              name={location.name}
              isHovered={isHovered || isSelected}
              onClick={() => setSelectedLocation(location.name)}
            />
          );
        })}
      </group>

      {/* Connections between offices */}
      {connections.map((connection, index) => (
        <Connection
          key={index}
          start={connection.start}
          end={connection.end}
          progress={connection.progress}
        />
      ))}

      {/* Atmosphere */}
      <Sphere args={[1.1, 64, 64]}>
        <meshPhongMaterial
          color="#4a148c"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Glow effect */}
      <Sphere args={[1.15, 64, 64]}>
        <meshBasicMaterial
          color="#4a148c"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
}

export default function GlobeVisualization() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  
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
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
        />
      </Canvas>
      
      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2 gradient-text">Global Offices</h3>
        <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
          {officeLocations.map((location) => (
            <div
              key={location.name}
              className={`flex items-center gap-2 text-sm p-2 rounded-lg cursor-pointer transition-colors ${
                activeLocation === location.name ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
              onClick={() => setActiveLocation(location.name)}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: location.color }} />
              <span className="text-white/90">{location.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {activeLocation && (
        <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-4 rounded-lg">
          <h3 className="text-lg font-semibold gradient-text">{activeLocation} Office</h3>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <p className="text-white/70 text-sm">Address:</p>
              <p className="text-white/90">123 Business Avenue, {activeLocation}</p>
            </div>
            <div>
              <p className="text-white/70 text-sm">Contact:</p>
              <p className="text-white/90">{activeLocation.toLowerCase()}@learnxchain.com</p>
            </div>
            <div>
              <p className="text-white/70 text-sm">Hours:</p>
              <p className="text-white/90">Mon-Fri: 9am-6pm (Local Time)</p>
            </div>
            <div>
              <p className="text-white/70 text-sm">Team Size:</p>
              <p className="text-white/90">{Math.floor(Math.random() * 50) + 10} Employees</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
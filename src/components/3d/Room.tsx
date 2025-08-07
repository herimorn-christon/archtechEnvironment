import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface RoomProps {
  width?: number;
  length?: number;
  height?: number;
}

const Room: React.FC<RoomProps> = ({
  width = 10,
  length = 10,
  height = 3
}) => {
  const floorRef = useRef<Mesh>(null);
  const wallsRef = useRef<Mesh>(null);

  useFrame(() => {
    if (floorRef.current) {
      // Add any animations here
    }
  });

  return (
    <group>
      {/* Floor */}
      <mesh
        ref={floorRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <planeGeometry args={[width, length]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* Walls */}
      <group ref={wallsRef}>
        {/* Back Wall */}
        <mesh position={[0, height / 2, -length / 2]}>
          <planeGeometry args={[width, height]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Left Wall */}
        <mesh 
          position={[-width / 2, height / 2, 0]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <planeGeometry args={[length, height]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Right Wall */}
        <mesh
          position={[width / 2, height / 2, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <planeGeometry args={[length, height]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Add lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8}
        castShadow
      />
    </group>
  );
};

export default Room;
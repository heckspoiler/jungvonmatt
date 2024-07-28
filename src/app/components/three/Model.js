'use client';
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

export default function Model() {
  const meshRef = useRef();
  const { nodes } = useGLTF('/assets/glassy.glb');
  const timeRef = useRef(0);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.y = -0.4;
      meshRef.current.rotation.x = 1.5;
      meshRef.current.rotation.y = 0;
      meshRef.current.rotation.z = 0;
    }
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      timeRef.current += delta;
      meshRef.current.rotation.z += 0.1 * delta;
      meshRef.current.position.y += Math.sin(timeRef.current) * 0.001;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={nodes.Curve002.geometry} scale={3}>
        <meshStandardMaterial
          color={new THREE.Color('white')}
          metalness={1}
          roughness={0.2}
          envMapIntensity={1.5}
        />
      </mesh>

      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
        enableZoom={false}
      />
      <Environment preset="city" />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
    </group>
  );
}

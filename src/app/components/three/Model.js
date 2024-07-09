'use client';
import React, { useRef, useEffect } from 'react';
import {
  useGLTF,
  OrbitControls,
  Environment,
  useEnvironment,
} from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Model() {
  const { viewport, camera, scene } = useThree();
  const meshRef = useRef();
  const { nodes } = useGLTF('/assets/neuuu.glb');
  const timeRef = useRef(0);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.position.y = -0.4;
      meshRef.current.rotation.x = 1.5;
      meshRef.current.rotation.y = 0;
      meshRef.current.rotation.z = 0;
    }
  }, [scene]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      timeRef.current += delta;
      meshRef.current.rotation.z += 0.1 * delta;
      meshRef.current.position.y += Math.sin(timeRef.current) * 0.001;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={nodes.Curve002.geometry} scale={1.13}>
        <meshPhysicalMaterial
          metalness={1}
          roughness={0.2}
          envMapIntensity={0.2}
          clearcoat={1}
          clearcoatRoughness={0.7}
          color={new THREE.Color('darkgrey')}
        />
      </mesh>

      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
        enableZoom={false}
      />

      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
    </group>
  );
}

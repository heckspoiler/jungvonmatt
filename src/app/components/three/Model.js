'use client';
import React, { useRef, useEffect } from 'react';
import {
  useGLTF,
  OrbitControls,
  MeshTransmissionMaterial,
  MeshWobbleMaterial,
  RoundedBox,
} from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

export default function Model() {
  const { viewport, camera } = useThree();
  const meshRef = useRef();
  const { nodes } = useGLTF('/assets/jvm.glb');
  const useControls = false; // Set this to true to re-enable controls

  const materialProps = useControls
    ? useControls('Material', {
        thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0.4, min: 0, max: 1, step: 0.01 },
        transmission: { value: 0.8, min: 0, max: 1, step: 0.1 },
        ior: { value: 0.5, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 0.92, min: 0, max: 1 },
        backside: { value: true },
      })
    : {
        thickness: 0.2,
        roughness: 0.4,
        transmission: 0.8,
        ior: 0.5,
        chromaticAberration: 0.92,
        backside: true,
      };

  useFrame((_, delta) => {
    meshRef.current.rotation.x += 0.2 * delta;
    meshRef.current.rotation.y += 0.2 * delta;
    meshRef.current.rotation.z += 0.2 * delta;
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      {/* <mesh
        ref={meshRef}
        geometry={nodes.Curve001.geometry}
        rotation={[Math.PI / 2, 0, 0]} // Rotate 90 degrees around X-axis
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh> */}

      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
        enableZoom={false}
      />
    </group>
  );
}

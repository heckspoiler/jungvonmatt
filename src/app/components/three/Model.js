'use client';
import React, { useRef, useEffect } from 'react';
import {
  useGLTF,
  OrbitControls,
  MeshTransmissionMaterial,
} from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import * as THREE from 'three';

export default function Model() {
  const { viewport, camera } = useThree();
  const meshRef = useRef();
  const { nodes } = useGLTF('/assets/jvm.glb');

  const materialProps = useControls('Material', {
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.25, min: 0, max: 1, step: 0.01 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.3, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.39, min: 0, max: 1 },
    backside: { value: true },
  });

  useEffect(() => {
    if (meshRef.current) {
      const bbox = new THREE.Box3().setFromObject(meshRef.current);
      const center = bbox.getCenter(new THREE.Vector3());

      meshRef.current.position.x = -1;
      meshRef.current.position.y = -2;
      const maxDim = Math.max(bbox.max.x - bbox.min.x, bbox.max.z - bbox.min.z);
      const scale = 2.5 / maxDim; // Scale to make the largest dimension 5 units
      meshRef.current.scale.set(scale, scale, scale);

      camera.position.set(1, 2, 3);
      camera.lookAt(0, 0, 0);
    }
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh
        ref={meshRef}
        geometry={nodes.Curve001.geometry}
        rotation={[Math.PI / 2, 0, 0]} // Rotate 90 degrees around X-axis
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
        enableZoom={false}
      />
    </>
  );
}

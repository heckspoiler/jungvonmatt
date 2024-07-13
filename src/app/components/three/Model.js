'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  useGLTF,
  OrbitControls,
  Environment,
  MeshDistortMaterial,
} from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Model() {
  const meshRef = useRef();
  const { nodes } = useGLTF('/assets/neuuu.glb');
  const timeRef = useRef(0);
  const scrollProgressRef = useRef(0);
  const [scrollDistortion, setScrollDistortion] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const calcDelta = () => {
    const position = window.scrollY;
    setTimeout(() => {
      setScrollPosition(0);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', calcDelta);
  }, [scrollPosition]);

  useGSAP(() => {
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        scrollProgressRef.current = self.progress;
        setScrollDistortion(self.progress * 0.4);
      },
    });
  }, []);

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
      meshRef.current.rotation.z = scrollProgressRef.current * Math.PI;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={nodes.Curve002.geometry} scale={1.13}>
        <MeshDistortMaterial
          distort={scrollDistortion}
          speed={1.5}
          color={new THREE.Color('black')}
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

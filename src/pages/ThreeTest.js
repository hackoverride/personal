import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from "three";

function Box() {
  const mesh = useRef();

  // Rotate mesh every frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={'orange'} />
    </mesh>
  );
}

export default function ThreeTest() {
  useEffect(() => {
    const color = new THREE.Color(0x282c34); // matching React's bg color
    document.body.style.background = color.getStyle();
  }, []);

  return (
    <div>
      <Canvas style={{ height: '400px', width: '400px' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

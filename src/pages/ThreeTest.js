import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from "three";

function Sphere({ position, size = 0.2 }) {
  const mesh = useRef();

  // Rotate mesh every frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));

  return (
    <mesh ref={mesh} position={position}>
      <sphereBufferGeometry attach="geometry" args={[size, 32, 32]} />
      <meshStandardMaterial attach="material" color={'#ff3344'} />
    </mesh>
  );
}

export default function ThreeTest() {
  useEffect(() => {
    const color = new THREE.Color(0x282c34); // matching React's bg color
    document.body.style.background = color.getStyle();
  }, []);

  return (
    <div style={{display: 'flex', position: 'relative', placeContent: 'center'}}>
      <Canvas style={{ height: '400px', width: '400px', border: '1px solid red' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* midsize tops */}
        <Sphere position={[0, 2.1, 0]}  size={0.4} />
        <Sphere position={[0.8, 1.2, 0]}  size={0.4} />
        <Sphere position={[-0.8, 1.2, 0]}  size={0.4} />
        {/* smaller tops */}
        <Sphere position={[1, 2.05, 0]}  size={0.3} />
        <Sphere position={[-1, 2.05, 0]}  size={0.3} />
        {/* smaller spheres */}
        <Sphere position={[0, 0.6, 0]}  size={0.3} />
        <Sphere position={[-1.6, 0.4, 0]}  size={0.3} />
        <Sphere position={[1.6, 0.4, 0]}  size={0.3} />
        <Sphere position={[0, -1.2, 0]}  size={0.3} />
        {/* left and right midszie */}
        <Sphere position={[-2.6, 0.3, 0]}  size={0.4} />
        <Sphere position={[2.6, 0.3, 0]}  size={0.4} />
        {/* Bottom sphere */}
        <Sphere position={[0, -3, 0]}  size={0.35} />
        {/* <Sphere position={[1.2, 0, 0]} />
        <Sphere position={[0, 1.2, 0]} />
        <Sphere position={[0, -1.2, 0]} />
        
        <Sphere position={[2, -1.2, 0]} />
        <Sphere position={[0, 0, 0]} /> */}
        <OrbitControls />
      </Canvas>
    </div>
  )
}

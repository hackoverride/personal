import React, { useRef, useEffect, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const HEART_POSITIONS = [
  [8, 0, 0], // Light
  [0, 1, 0],
  [1.4, 1.4, 0],
  [-1.4, 1.4, 0],
  [-0.7, 1.2, 0],
  [0.7, 1.2, 0],
  [2, 1, 0],
  [-2, 1, 0],
  [2.2, 0.5, 0],
  [-2.2, 0.5, 0],
  [2, -0, 0],
  [-2, -0, 0],
  [1.8, -0.5, 0],
  [-1.8, -0.5, 0],
  [1.5, -1, 0],
  [-1.5, -1, 0],
  [1, -1.5, 0],
  [-1, -1.5, 0],
  [0.5, -2, 0],
  [-0.5, -2, 0],
  [0, -2.5, 0],
];

// Nine rainbow colors
const RAINBOW_COLORS = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#8B00FF",
];

const HEART_SIZES = [
  0, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
  0.2, 0.2, 0.2, 0.2, 0.2,
];

const FINAL_POSITIONS = [
  [10, 10, 10], // Light
  [0, 2.1, 0],
  [0.9, 1.1, 0],
  [-0.9, 1.1, 0],
  [1, 2.05, 0],
  [-1, 2.05, 0],
  [-2, 1.3, 0],
  [2, 1.3, 0],
  [0, 0.6, 0],
  [-1.6, 0.4, 0],
  [1.6, 0.4, 0],
  [0, -1.2, 0],
  [-2.6, 0.3, 0],
  [2.6, 0.3, 0],
  [-0.8, -0.3, 0],
  [0.8, -0.3, 0],
  [-2, -0.8, 0],
  [2, -0.8, 0],
  [-1, -1.9, 0],
  [1, -1.9, 0],
  [0, -3, 0],
];

const FINAL_SIZES = [
  0, 0.45, 0.45, 0.45, 0.35, 0.35, 0.55, 0.55, 0.35, 0.35, 0.35, 0.35, 0.45,
  0.45, 0.55, 0.55, 0.5, 0.5, 0.65, 0.65, 0.4,
];

function Sphere({ position, size = 0.2, color = "#ff3344" }) {
  const mesh = useRef();

  // Rotate mesh every frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));

  return (
    <mesh ref={mesh} position={position}>
      <sphereBufferGeometry attach="geometry" args={[size, 32, 32]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

function Controls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  let speed = 0.5; // Speed of rotation
  let distance = 5; // Distance from the center

  useFrame((state) => {
    const t = state.clock.getElapsedTime(); // Get elapsed time
    camera.position.x = distance * Math.cos(speed * t); // Circular movement around x-axis
    camera.position.z = distance * Math.sin(speed * t); // Circular movement around z-axis
    camera.lookAt(0, 0, 0); // Make sure camera looks at the center
  });

  return <OrbitControls ref={camera} args={[camera, domElement]} autoRotate />;
}

export default function ThreeTest() {
  const [sphereSizes, setSphereSizes] = useState(HEART_SIZES);
  const [spherePositions, setSpherePositions] = useState(HEART_POSITIONS);
  const [sphereColors, setSphereColors] = useState(RAINBOW_COLORS);

  useEffect(() => {
    const color = new THREE.Color(0x282c34); // matching React's bg color
    document.body.style.background = color.getStyle();
  }, []);


  useEffect(() => {
    let interval;
    setTimeout(() => {
      setSphereColors([]); // Remove colors
      interval = setInterval(() => {
        setSpherePositions((prevPositions) => {
          const newPositions = prevPositions.map((position, i) => [
            position[0] + (FINAL_POSITIONS[i][0] - position[0]) / 300,
            position[1] + (FINAL_POSITIONS[i][1] - position[1]) / 300,
            position[2] + (FINAL_POSITIONS[i][2] - position[2]) / 300,
          ]);
          return newPositions;
        });

        setSphereSizes((prevSizes) => {
          const newSizes = prevSizes.map(
            (size, i) => size + (FINAL_SIZES[i] - size) / 300
          );
          return newSizes;
        });
      }, 30);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ display: "flex", position: "relative", placeContent: "center" }}
    >
      <Canvas style={{ height: "450px", width: "550px" }}>
        <ambientLight />
        <pointLight position={spherePositions[0]} />
        <Sphere
          position={spherePositions[1]}
          size={1 * sphereSizes[1]}
          color={sphereColors[3]}
        />
        <Sphere
          position={spherePositions[2]}
          size={1 * sphereSizes[2]}
          color={sphereColors[4]}
        />
        <Sphere
          position={spherePositions[3]}
          size={1 * sphereSizes[3]}
          color={sphereColors[2]}
        />
        <Sphere
          position={spherePositions[4]}
          size={1 * sphereSizes[4]}
          color={sphereColors[2]}
        />
        <Sphere
          position={spherePositions[5]}
          size={1 * sphereSizes[5]}
          color={sphereColors[3]}
        />
        <Sphere
          position={spherePositions[6]}
          size={1 * sphereSizes[6]}
          color={sphereColors[5]}
        />
        <Sphere
          position={spherePositions[7]}
          size={1 * sphereSizes[7]}
          color={sphereColors[1]}
        />
        <Sphere
          position={spherePositions[8]}
          size={1 * sphereSizes[8]}
          color={sphereColors[6]}
        />
        <Sphere
          position={spherePositions[9]}
          size={1 * sphereSizes[9]}
          color={sphereColors[0]}
        />
        <Sphere
          position={spherePositions[10]}
          size={1 * sphereSizes[10]}
          color={sphereColors[6]}
        />
        <Sphere
          position={spherePositions[11]}
          size={1 * sphereSizes[11]}
          color={sphereColors[0]}
        />
        <Sphere
          position={spherePositions[12]}
          size={1 * sphereSizes[12]}
          color={sphereColors[5]}
        />
        <Sphere
          position={spherePositions[13]}
          size={1 * sphereSizes[13]}
          color={sphereColors[1]}
        />
        <Sphere
          position={spherePositions[14]}
          size={1 * sphereSizes[14]}
          color={sphereColors[4]}
        />
        <Sphere
          position={spherePositions[15]}
          size={1 * sphereSizes[15]}
          color={sphereColors[1]}
        />
        <Sphere
          position={spherePositions[16]}
          size={1 * sphereSizes[16]}
          color={sphereColors[4]}
        />
        <Sphere
          position={spherePositions[17]}
          size={1 * sphereSizes[17]}
          color={sphereColors[2]}
        />
        <Sphere
          position={spherePositions[18]}
          size={1 * sphereSizes[18]}
          color={sphereColors[3]}
        />
        <Sphere
          position={spherePositions[19]}
          size={1 * sphereSizes[19]}
          color={sphereColors[3]}
        />
        <Sphere
          position={spherePositions[20]}
          size={1 * sphereSizes[20]}
          color={sphereColors[3]}
        />

        <Controls />
      </Canvas>
    </div>
  );
}

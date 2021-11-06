import * as THREE from "three";
import styled from "styled-components";
import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import moon from "./images/moon.jpg";
import europa from "./images/europa.jpg";

const Box = ({ position, args, color }) => {
  const mesh = useRef(false);
  const texture = useLoader(THREE.TextureLoader, europa);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));
  return (
    <mesh castShadow position={position} ref={mesh}>
      <dodecahedronGeometry args={[2, 100]} />
      <meshBasicMaterial attach="material" map={texture} />
      {/* <circleGeometry args={[2, 200]} /> */}
      {/* <boxGeometry args={[3, 3, 3]} args={args} /> */}
      {/* <meshStandardMaterial color={color} /> */}
    </mesh>
  );
};

function App() {
  return (
    <Container>
      <Canvas
        colorManagement
        shadowMap
        camera={{ fov: 30, position: [-5, 2, 10] }}
      >
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <ambientLight intensity={0.3} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <Box position={[0, 1, 0]} args={[3, 2, 1]} color="lightblue" />
        <Box position={[-2, 1, -5]} color="pink" />
        <Box position={[5, 1, -2]} color="red" />
        <OrbitControls />
      </Canvas>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

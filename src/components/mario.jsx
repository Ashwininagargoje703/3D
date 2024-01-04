import React, { useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

function BackgroundSphere() {
  const sphereRef = useRef();
  const envMap = useLoader(
    THREE.TextureLoader,
    "https://t4.ftcdn.net/jpg/06/41/82/09/240_F_641820987_Z4HKb00CrMl6JmNs5Nc3Wl1shQvBXcGS.jpg"
  );

  return (
    <mesh ref={sphereRef} scale={[500, 500, 500]}>
      <sphereGeometry args={[1, 60, 60]} />
      <meshBasicMaterial map={envMap} side={THREE.BackSide} />
    </mesh>
  );
}

function Mario() {
  const marioRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "models/mario.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1); // Set initial scale to be smaller
        marioRef.current.add(model);
        animateMario(model); // Start animation on Mario
      },
      undefined,
      (error) => {
        console.error("Error loading Mario model:", error);
      }
    );

    // Function to animate Mario
    const animateMario = (model) => {
      // Implement your animation logic here
      // For example: Using THREE.AnimationMixer
    };
  }, []);

  return (
    <div className="canvas-container">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* Mario model */}
        <BackgroundSphere />
        <group ref={marioRef} position={[0, 0, 0]} />

        {/* Token */}
        <mesh position={[5, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 1, 32]} />{" "}
          <meshStandardMaterial color="blue" />{" "}
        </mesh>
      </Canvas>
    </div>
  );
}

export default Mario;

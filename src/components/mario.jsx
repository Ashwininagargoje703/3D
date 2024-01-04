import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

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

import React, { useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

function BackgroundSphere() {
  const sphereRef = useRef();
  const envMap = useLoader(
    THREE.TextureLoader,
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg"
  );

  return (
    <mesh ref={sphereRef} scale={[100, 100, 100]}>
      <sphereGeometry args={[1, 60, 60]} />
      <meshBasicMaterial map={envMap} side={THREE.BackSide} />
    </mesh>
  );
}

function MoonModel() {
  const moonRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "models/moon_with_2k_textures.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(2, 2, 2);
        moonRef.current.add(model);
        moonRef.current.position.y = 1;
      },
      undefined,
      (error) => {
        console.error("Error loading moon model:", error);
      }
    );
  }, []);

  return <group ref={moonRef} />;
}

function Mario() {
  const marioRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "models/mario.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);
        marioRef.current.add(model);
        marioRef.current.position.x = -2;
        animateMario(model);
      },
      undefined,
      (error) => {
        console.error("Error loading Mario model:", error);
      }
    );

    const animateMario = (model) => {
      // Implement your animation logic here using THREE.AnimationMixer
    };
  }, []);

  return (
    <div className="canvas-container">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Background sphere */}
        <BackgroundSphere />

        {/* Mario model */}
        <group ref={marioRef} position={[0, 0, 0]} />

        {/* Moon model */}
        <MoonModel />
      </Canvas>
      <div className="storyline">
        {/* Storyline description */}
        <h1 className="animate__animated animate__fadeInDown">Storyline</h1>
        <p className="animate__animated animate__fadeInUp">
          Mario embarks on a quest to find the mysterious blockchain token
          scattered across the 3D world. Use the controls to navigate Mario and
          collect the tokens!
        </p>
      </div>
    </div>
  );
}

export default Mario;

import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const ChildModel = ({ modelRef, scene }) => {
  useEffect(() => {
    modelRef.current.rotation.z = Math.PI;

    return () => {};
  }, []);

  useFrame(() => {
    modelRef.current.rotation.z += 0.01;
  });

  return (
    <group position={[0, 0, 5]} ref={modelRef}>
      <primitive object={scene} scale={[2, 2, 2]} position={[0, 0, -5]} />
    </group>
  );
};

const ThreeDModel = () => {
  const modelRef = useRef();
  const canvasRef = useRef();

  const { scene } = useGLTF("models/Sandbox.glb");

  return (
    <Canvas
      style={{
        height: "70vh",
        width: "100%",
        marginTop: "-240px",
      }}
      camera={{
        position: [0, 0, 10],
      }}
      ref={canvasRef}
    >
      <ambientLight intensity={1} />
      <directionalLight intensity={0.5} position={[5, 5, 5]} />
      <ChildModel modelRef={modelRef} scene={scene} />
    </Canvas>
  );
};

export default ThreeDModel;

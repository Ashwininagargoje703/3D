import React, { useEffect, useRef, useState } from "react";
import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const RotateMoon = ({ position }) => {
  const [sphereX, setSphereX] = useState(position);
  const modelRef = useRef();

  const gltf = useGLTF("/src/assets/moon/scene.gltf", undefined, (error) => {
    console.error("Error loading GLTF:", error);
  });

  const [ref, sphereApi] = useSphere(() => ({
    type: "Dynamic",
    mass: 0,
    position,
    args: [1],
  }));

  useEffect(() => {
    setSphereX(position);
  }, [position]);

  useFrame(({ clock }) => {
    sphereApi.position.set(sphereX[0], sphereX[1], sphereX[2]);
    sphereApi.rotation.set(0, clock.getElapsedTime(), 0);
  });

  return (
    <>
      <mesh ref={ref} position={sphereX}>
        <primitive
          object={gltf.scene}
          scale={[0.05, 0.05, 0.05]}
          position={position}
          ref={modelRef}
        />
        {/* <sphereGeometry args={[1, 32, 32]} /> */}
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
};

export default RotateMoon;

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import RotateMoon from "./rotatemoon";

function CanvasWrapper({ scrollY }) {
  const canvasRef = useRef();

  return (
    <Canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0,
      }}
      camera={{
        position: [0, 0, 10],
      }}
      onCreated={({ gl }) => {
        gl.setClearColor("#000");
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[5, 5, 5]} />
      <Physics>
        <RotateMoon position={[0.1, 0.1, -25]} />
      </Physics>
    </Canvas>
  );
}

export default CanvasWrapper;

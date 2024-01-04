import React, { useMemo } from "react";

const Stars = ({ count }) => {
  const positions = useMemo(() => {
    let positions = [];

    for (let i = 0; i < count; i++) {
      positions.push(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
    }

    return new Float32Array(positions);
  }, [count]);

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} sizeAttenuation color="#ffffff" />
    </points>
  );
};

export default Stars;

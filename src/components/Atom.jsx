import React, { useMemo } from "react"; // Importing React and useMemo hook from react.
import { Line, Sphere } from "@react-three/drei"; // Importing Line and Sphere from @react-three/drei for 3D components.
import { EffectComposer, Bloom } from "@react-three/postprocessing"; // Importing postprocessing effects from @react-three/postprocessing.
import * as THREE from "three"; // Importing THREE library for 3D graphics.

// Shape functional component which renders the custom 3D shape.
const Shape = () => {
  // useMemo hook is used to memoize the points of the ellipse so that they are not recalculated on every render.
  const points = useMemo(
    () => // Using an EllipseCurve to define an ellipse, then getting points on that ellipse.
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100),
    [] // Dependency array for useMemo is empty, so points are only calculated once.
  );
  return (
    <group> {/* Group to combine multiple elements */}
      {/* Rendering lines with calculated points, specific colors, lineWidth and rotation */}
      <Line worldUnits points={points} color="#cae6f1" lineWidth={0.3} />
      <Line worldUnits points={points} color="#cae6f1" lineWidth={0.3} rotation={[0, 0, 1]} />
      <Line worldUnits points={points} color="#cae6f1" lineWidth={0.3} rotation={[0, 0, -1]} />
      {/* Rendering a sphere with specific args and material */}
      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
  );
};

// Atom functional component to render the Shape component with Bloom effect.
const Atom = () => {
  return (
    <>
      {/* Rendering the Shape component */}
      <Shape />
      {/* Applying Bloom effect using EffectComposer */}
      <EffectComposer>
        <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
    </>
  );
};

// Exporting Atom component to be used in other parts of the application.
export default Atom;

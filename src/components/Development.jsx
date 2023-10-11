import React, { Suspense } from "react"; // Importing React and Suspense for lazy loading
import { OrbitControls } from "@react-three/drei"; // Importing OrbitControls for camera control
import { Canvas } from "@react-three/fiber"; // Importing Canvas for rendering React components in three.js
import Atom from "./Atom"; // Importing the Atom component
import styled from "styled-components"; // Importing styled-components for styling

// Defining styled-component for description box
const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 100px;

  // Media query for responsive design, centers Desc on smaller screens
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

// Main Development component
const Development = () => {
  return (
    <>
      {/* Canvas component for rendering 3D components */}
      <Canvas camera={{ position: [0, 0, 10] }}>
        {/* Suspense allows lazy loading, providing a smoother user experience */}
        <Suspense fallback={null}>
          <Atom /> {/* Rendering Atom component */}
          {/* OrbitControls for interactive camera controls, with zoom disabled and auto-rotation enabled */}
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      {/* Description box with marketing message */}
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
    </>
  );
};

// Exporting Development component for use in other parts of the application
export default Development;

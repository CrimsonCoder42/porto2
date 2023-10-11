import React, { useRef } from "react"; // Importing React and the useRef hook
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei"; // Importing 3D utilities from drei
import { useFrame } from "@react-three/fiber"; // Importing frame hook from react-three/fiber for animation

// Cube component definition
const Cube = () => {
  const textRef = useRef(); // Creating a reference to manipulate the Text component
  // useFrame hook is called before every frame render, updating position of text dynamically
  useFrame(
    (state) => 
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2) // Changing text position based on time
  );
  
  return (
    <mesh> {/* 3D Object container */}
      <boxGeometry /> {/* Defines the geometry as a box */}
      <meshStandardMaterial> {/* Sets material to standard for realistic lighting */}
        <RenderTexture attach="map"> {/* Texture applied to the mesh material */}
          <PerspectiveCamera makeDefault position={[0, 0, 5]} /> {/* Camera with perspective view */}
          <color attach="background" args={["#dc9dcd"]} /> {/* Background color for the render texture */}
          {/* Text component displaying 'hello', with a dynamic position */}
          <Text ref={textRef} fontSize={3} color="#555">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

// Exporting Cube component for use in other parts of the application
export default Cube;

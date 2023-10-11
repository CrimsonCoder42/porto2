import React, { useRef } from "react"; // Importing React and the useRef hook from the React library
import { useGLTF } from "@react-three/drei"; // Importing useGLTF hook from drei for loading GLTF assets
import { a as three } from "@react-spring/three"; // Importing react-spring for animation, though it isn't used in the given code

// Mac component definition
export default function Mac({ ...props }) { // Using object destructuring to get the props
  const group = useRef(); // Creating a reference for grouping elements
  const { nodes, materials } = useGLTF("/mac-draco.glb"); // Using useGLTF hook to load the 3D model and its materials from a given path
  
  // Rendering group of 3D elements
  return (
    <group ref={group} {...props} dispose={null} > {/* Applying the reference and other props to the group, and preventing unmounting the group when it is removed from the React tree */}
      <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}> {/* Nested group with specific position and rotation */}
        {/* Rendering meshes with associated materials and geometry */}
        <mesh
          material={materials.aluminium} // Applying aluminium material
          geometry={nodes["Cube008"].geometry} // Applying geometry from loaded nodes
        />
        <mesh
          material={materials["matte.001"]} // Applying matte material
          geometry={nodes["Cube008_1"].geometry} // Applying associated geometry
        />
        <mesh
          material={materials["screen.001"]} // Applying screen material
          geometry={nodes["Cube008_2"].geometry} // Applying associated geometry
        />
      </group>
    </group>
  );
}

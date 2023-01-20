/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 brain.gltf
Author: 3DRT STUDIOS (https://sketchfab.com/Hanako.com)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/human-brain-7a27c17fd6c0488bb31ab093236a47fb
Title: Human Brain
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/brain.gltf')
  return (
    <group {...props} dispose={null} rotation={[-0.05, 1, -0.05]} position={[0, -1, 0]} >
      <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} scale={.04} />
    </group>
  )
}

useGLTF.preload('/brain.gltf')
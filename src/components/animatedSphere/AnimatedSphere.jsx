import React from "react"
import {Sphere, MeshDistortMaterial } from "@react-three/drei"

function AnimatedSphere({scale, position}) {
  return(
    <Sphere visible args={[1, 100, 200]} scale={scale} position={position}> 
      <MeshDistortMaterial 
        color="black"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={1}
      />
    </Sphere>
  )
}

export default AnimatedSphere
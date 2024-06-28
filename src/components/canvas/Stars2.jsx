import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, Sphere } from "@react-three/drei";

import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
 
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(45000), { radius: 1.2 }));
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30;
    ref.current.rotation.y -= delta / 10;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#F4FE00"
          size={0.0006}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}


const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ 
        position: [1, 0, 2] 
        }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
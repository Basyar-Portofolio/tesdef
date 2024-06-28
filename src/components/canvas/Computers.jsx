import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader"; // Ensure this path is correct

const Computers = ({ isMobile }) => {
  // Use useGLTF with cache enabled for better performance
  const { scene } = useGLTF("./desktop_pc/scene.gltf", true);

  // Set scale, position, and rotation based on the device type
  const scale = isMobile ? 0.6 : 0.8;
  const position = isMobile ? [0, -2.5, -1] : [0, -4, -1.5];
  const rotation = [-0.01, -0.2, -0.1];

  return (
    <mesh>
      {/* Optimize lighting for better performance and appearance */}
      <hemisphereLight intensity={1} groundColor="blue" />
      <spotLight intensity={0.8} position={[10, 10, 10]} angle={0.2} penumbra={1} castShadow />
      <primitive object={scene} scale={scale} position={position} rotation={rotation} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set up media query for responsiveness
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Update isMobile state based on media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Configure OrbitControls for smooth interaction */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.1}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

// src/components/Loader.js
import React from "react";
import { Html, useProgress } from "@react-three/drei";
import "./Loader/Loader.css"; //

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="loader-container mt-36">
        <div className="spinner"></div>
        <p className="loading-text">Loading {Math.round(progress)}%</p>
      </div>
    </Html>
  );
};

export default Loader;

"use client";

import * as THREE from "three";
import * as PANOLENS from "panolens";
import { useRef } from "react";

interface PanoProps {}

const Pano = ({}: PanoProps) => {
  const Canvas = useRef(null);

  const viewer = new PANOLENS.Viewer({
    container: Canvas.current,
    autoRotate: true,
    autoRotateSpeed: 0.2,
    autoRotateActivationDuration: 5000,
    dwellTime: 1000,
    autoHideInfospot: false,
    controlBar: false,
  });

  const img = new PANOLENS.ImagePanorama("/lab.png");
  viewer.add(img);

  return <div ref={Canvas} className="w-full h-screen"></div>;
};

export default Pano;

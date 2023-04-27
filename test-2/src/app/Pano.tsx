"use client";

import { useEffect, useRef } from "react";

interface PanoProps {}

const Pano = ({}: PanoProps) => {
  const Canvas = useRef(null);

  const initializePANOLENS = async () => {
    const PANOLENS = await import("panolens");

    const viewer = new PANOLENS.Viewer({
      container: Canvas.current,
      autoRotate: true,
      autoRotateSpeed: 0.2,
      autoRotateActivationDuration: 5000,
      dwellTime: 1000,
      autoHideInfospot: false,
      controlBar: true,
    });

    const img = new PANOLENS.ImagePanorama("/lab.png");
    viewer.add(img);
  };

  useEffect(() => {
    if (typeof window !== "undefined") initializePANOLENS();
  }, [Canvas]);

  return <div ref={Canvas} className="w-full h-screen overflow-hidden"></div>;
};

export default Pano;

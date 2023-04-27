"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    PANOLENS: any;
  }
}

interface btnProps {}

const PanoWithWindow = ({}: btnProps) => {
  const Canvas = useRef(null);

  const initializePANOLENS = async () => {
    const viewer = new window.PANOLENS.Viewer({
      container: Canvas.current,
      autoRotate: true,
      autoRotateSpeed: 0.2,
      autoRotateActivationDuration: 5000,
      dwellTime: 1000,
      autoHideInfospot: false,
      controlBar: false,
    });

    const img = new window.PANOLENS.ImagePanorama("/lab.png");
    viewer.add(img);
  };

  useEffect(() => {
    if (typeof window !== "undefined") initializePANOLENS();
  }, [Canvas]);

  return <div ref={Canvas} className="w-full h-screen"></div>;
};

export default PanoWithWindow;

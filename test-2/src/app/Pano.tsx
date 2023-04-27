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

  const handleDME = () => {
    if (typeof (DeviceMotionEvent as any).requestPermission === "function") {
      (DeviceMotionEvent as any)
        .requestPermission()
        .then((permissionState: any) => {
          if (permissionState === "granted") {
            // User has granted permission
            console.log(permissionState);
          }
        })
        .catch(console.error);
    }
  };

  return (
    <>
      <div ref={Canvas} className="w-full h-[500px] overflow-hidden"></div>
      <button
        onClick={handleDME}
        className="p-3 bg-cyan-600 text-white w-full mt-5"
      >
        Handle DME
      </button>
    </>
  );
};

export default Pano;

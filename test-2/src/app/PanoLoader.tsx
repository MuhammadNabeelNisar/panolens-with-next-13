"use client";

import { useEffect, useState } from "react";
import Pano from "./Pano";

const PanoLoader = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  if (isMounted) return <Pano />;

  return <>loding...</>;
};

export default PanoLoader;

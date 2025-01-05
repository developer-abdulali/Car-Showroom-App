"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const LenisWrapper = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Adjust scroll duration
      smooth: true, // Enable smooth scrolling
    });

    lenisRef.current = lenis;

    // Handle scroll events
    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisWrapper;

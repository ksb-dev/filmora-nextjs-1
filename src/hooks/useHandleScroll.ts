"use client";

import { useState, useEffect, RefObject } from "react";

export const useHandleScroll = (
  headerRef: RefObject<HTMLDivElement>,
  headerInnerRef: RefObject<HTMLDivElement>
): void => {
  let [position, setPosition] = useState<number>(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollpos = window.scrollY;

      if (position > currentScrollpos) {
        headerRef.current!.style.transform = "translateY(0%)";
        setTimeout(() => {
          headerInnerRef.current!.style.transform = "translateY(0%)";
        }, 300);
      } else {
        headerInnerRef.current!.style.transform = "translateY(-150%)";
        headerRef.current!.style.transform = "translateY(-150%)";
      }
      setPosition(currentScrollpos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);
};

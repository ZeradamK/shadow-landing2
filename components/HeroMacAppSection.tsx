"use client";

import React, { useRef, forwardRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_MARGIN_X = 100;
const HERO_MARGIN_Y = 30;
const HERO_RADIUS = 10;
const HERO_MAX_W = 1200;
const HERO_MAX_H = 700;

interface MacAppWindowProps {
  children: React.ReactNode;
  style?: any; // Accept MotionValue and CSSProperties
  className?: string;
}

const MacAppWindow = forwardRef<HTMLDivElement, MacAppWindowProps>(
  ({ children, style, className = "" }, ref) => (
    <motion.div
      ref={ref}
      className={
        "z-10 bg-black/80 border border-white/20 rounded-[10px] shadow-xl overflow-hidden focus:outline-none " +
        className
      }
      style={{
        ...style,
        transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)",
      }}
      tabIndex={0}
    >
      {/* Content area below header */}
      <div className="w-full h-full">
        <div className="p-4 md:p-6 lg:p-8 w-full h-full flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </motion.div>
  )
);

MacAppWindow.displayName = "MacAppWindow";
export { MacAppWindow };

const HeroMacAppSection = ({ children }: { children: React.ReactNode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // Track scroll progress for the hero section
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  // Animate margins and border-radius based on scroll progress
  const marginX = useTransform(scrollYProgress, [0, 1], [HERO_MARGIN_X, 0]);
  const marginY = useTransform(scrollYProgress, [0, 1], [HERO_MARGIN_Y, 0]);
  const marginBottom = useTransform(marginY, (v) => v + 50);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [HERO_RADIUS, 0]);
  const boxShadow = useTransform(scrollYProgress, [0, 1], [
    "0 8px 32px 0 rgba(0,0,0,0.15)",
    "0 0 0 0 rgba(0,0,0,0.05)"
  ]);

  const borderRadiusPx = useTransform(borderRadius, (v) => `${v}px`);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mac-app-like window */}
      <MacAppWindow
        style={{
          width: "100%",
          maxWidth: HERO_MAX_W,
          minHeight: 450,
          marginLeft: marginX,
          marginRight: marginX,
          marginTop: marginY,
          marginBottom: marginBottom,
          borderRadius,
          boxShadow,
        }}
      >
        {/* Content area below header, no scrollability */}
        <div className="w-full h-full">
          <div className="p-4 md:p-6 lg:p-8 w-full h-full flex flex-col items-center justify-center">
            {children}
          </div>
        </div>
      </MacAppWindow>
    </section>
  );
};

export default HeroMacAppSection; 
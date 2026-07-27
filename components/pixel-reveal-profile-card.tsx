"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type PixelRevealProfileCardProps = {
  image: string;
  name: string;
  role: string;
  pixelSize?: number;
  animationDuration?: number;
  className?: string;
};

const seededRandom = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

export function PixelRevealProfileCard({
  image,
  name,
  role,
  pixelSize = 12,
  animationDuration = 0.8,
  className,
}: PixelRevealProfileCardProps) {
  const [hovered, setHovered] = useState(false);

  const pixels = useMemo(() => {
    const cols = Math.ceil(320 / pixelSize);
    const rows = Math.ceil(400 / pixelSize);

    return Array.from({ length: cols * rows }).map((_, i) => {
      const x = i % cols;
      const y = Math.floor(i / cols);

      const centerX = cols / 2;
      const centerY = rows / 2;

      const dx = x - centerX;
      const dy = y - centerY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      const angle = Math.atan2(dy, dx);

      const strength = 40 + seededRandom(i + 1) * 120;

      return {
        id: i,
        delay: distance * 0.015,
        moveX: Math.cos(angle) * strength,
        moveY: Math.sin(angle) * strength,
        opacity: 0.7 + seededRandom(i + 101) * 0.3,
      };
    });
  }, [pixelSize]);

  const cols = Math.ceil(320 / pixelSize);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={cn(
        "group relative w-80 overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl",
        className,
      )}
    >
      {/* Image */}
      <div className="relative h-[400px] w-full">
        <img
          src={image}
          alt={name}
          className={cn(
            "h-full w-full object-cover transition-all duration-700",
            hovered ? "scale-105" : "scale-100",
          )}
        />

        {/* Glow */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            hovered ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="absolute inset-0 bg-linear-to-t from-cyan-500/10 via-transparent to-purple-500/10" />
        </div>

        {/* Pixel Layer */}
        <div
          className="absolute inset-0"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, ${pixelSize}px)`,
          }}
        >
          {pixels.map((pixel) => (
            <motion.div
              key={pixel.id}
              className="bg-neutral-900"
              style={{
                width: pixelSize,
                height: pixelSize,
              }}
              animate={
                hovered
                  ? {
                      x: pixel.moveX,
                      y: pixel.moveY,
                      opacity: 0,
                      scale: 0.2,
                    }
                  : {
                      x: 0,
                      y: 0,
                      opacity: pixel.opacity,
                      scale: 1,
                    }
              }
              transition={{
                duration: animationDuration,
                delay: hovered ? pixel.delay : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}
        </div>

        {/* Subtle scanlines */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.03)_50%)] bg-size-[100%_4px]" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/80 to-transparent p-6">
        <motion.div
          animate={{
            y: hovered ? -4 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-sm text-neutral-400">{role}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

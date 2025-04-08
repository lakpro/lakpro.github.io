import React from "react";
import { motion } from "framer-motion";
import { cn } from "./lib/cn";

type Props = {
  title: string;
  paths: string[];
  speed?: number;
  className?: string;
};

export function HelloEffect({ title, paths, speed = 1, className }: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 200" // Adjust based on language
      fill="none"
      stroke="currentColor"
      strokeWidth="14.8883"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <title>{title}</title>
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          initial={{ strokeLinecap: "inherit", pathLength: 0 }}
          animate={{ strokeLinecap: "round", pathLength: 1 }}
          transition={{
            duration: calc(0.7),
            ease: "easeInOut",
            delay: calc(i * 0.4),
          }}
        />
      ))}
    </motion.svg>
  );
}

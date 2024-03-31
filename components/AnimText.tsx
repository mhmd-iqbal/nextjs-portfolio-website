import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import RedoAnimText from "./RedoAnimText";
import CursorBlinker from "./CursorBlinker";

export interface IAnimTextProps {
  delay: number;
  text: string[];
}

export default function AnimText({ delay, text }: IAnimTextProps) {
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, 60, {
      type: "tween",
      delay: delay,
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="">
      <RedoAnimText delay={delay + 1} text={text} />
      <CursorBlinker />
    </span>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface AnimationProps {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
}

const animations: Record<string, AnimationProps | any> = {
  scale: {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  },
  rotate: {
    rest: { rotate: 0 },
    hover: { rotate: 15 },
  },
  fade: {
    rest: { opacity: 1 },
    hover: { opacity: 0.7 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
  },
};

interface AnimatedContainerProps {
  animationType?:
    | "scale"
    | "rotate"
    | "fade"
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight";
  children: ReactNode;
  time?: number;
  [key: string]: any; // PERMITE OTRAS PROPS
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  animationType = "scale",
  children,
  time = 1,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const selectedAnimation = animations[animationType] || animations.scale;

  return (
    <motion.div
      className="animatedMotion"
      ref={ref}
      initial={
        animationType === "fadeInUp"
          ? selectedAnimation.initial
          : animationType === "fadeInDown"
          ? selectedAnimation.initial
          : animationType === "fadeInLeft"
          ? selectedAnimation.initial
          : animationType === "fadeInRight"
          ? selectedAnimation.initial
          : selectedAnimation.rest
      }
      animate={
        isVisible && animationType === "fadeInUp"
          ? selectedAnimation.animate
          : isVisible && animationType === "fadeInDown"
          ? selectedAnimation.animate
          : isVisible && animationType === "fadeInLeft"
          ? selectedAnimation.animate
          : isVisible && animationType === "fadeInRight"
          ? selectedAnimation.animate
          : {}
      }
      transition={{ duration: time }} // TIEMPO
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;

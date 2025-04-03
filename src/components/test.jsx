import { motion } from "framer-motion";
import styled from "styled-components";
function AnimatedCircle() {
  return (
    <SVG viewBox="0 0 100 100">
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        stroke="white"
        strokeWidth="5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </SVG>
  );
}

const SVG = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0.3;
`;

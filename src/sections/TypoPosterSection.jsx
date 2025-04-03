import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function TypoPosterSection({
  bg,
  leftText,
  rightText,
  subtitle,
  hashtag,
  animate = false,

}) {
  return (
    <Panel bg={bg} className="panel panel1">
      <TextWrapper>
        <LeftText
          as={motion.h1}
          initial={animate ? { x: -100, opacity: 0 } : false}
          whileInView={animate ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {leftText}
        </LeftText>
        <AnimatedCircle />
        <RightText
          as={motion.h1}
          initial={animate ? { x: 100, opacity: 0 } : false}
          whileInView={animate ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {rightText}
        </RightText>

        <BottomLeft>
          <SubText>{subtitle}</SubText>
          <HashTag>{hashtag}</HashTag>
        </BottomLeft>
      </TextWrapper>
    </Panel>
  );
}

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
const Panel = styled.div`
  flex: 0 0 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: white;
`;

const LeftText = styled.h1`
  position: absolute;
  top: 20%;
  left: 5%;
  font-size: 220px;
  font-weight: 900;
  margin: 0;
  @media (max-width: 768px) {
    bottom: 6%;
    font-size: 16vw;
  }
`;

const RightText = styled.h1`
  position: absolute;
  bottom: 20%;
  right: 5%;
  font-size: 220px;
  font-weight: 900;
  margin: 0;
  @media (max-width: 768px) {
    bottom: 42%;
    font-size: 16vw;
  }
`;

const BottomLeft = styled.div`
  position: absolute;
  bottom: 10%;
  left: 5%;
  
`;

const SubText = styled.p`
  font-size: 1.6rem;
  margin: 0 0 0.5rem;
`;

const HashTag = styled.p`
  font-size: 0.9rem;
  opacity: 0.7;
  margin: 0;
`;

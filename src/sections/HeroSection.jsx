import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [windowWidth, setWindowWidth] = useState(() => typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const boxWidth = useTransform(scrollYProgress, [0, 1], [windowWidth, windowWidth / 2]);
  const boxX = useTransform(scrollYProgress, [0, 1], [0, windowWidth / 2]);

  const bgColor = useTransform(scrollYProgress, [0, 0.5], ["#00A5E7", "#00A5E7"]);
  const boxOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 0.3, 0]);

  return (
    <ScrollWrapper ref={sectionRef}>
      <StickyContent>
        <IntroTextContainer>
          <IntroText
            style={{ opacity: introOpacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span>MY UNIQUE{" "}</motion.span>
            <motion.span>ROUTINE</motion.span>
          </IntroText>
        </IntroTextContainer>

        <AnimatedBox
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          style={{
            backgroundColor: bgColor,
            opacity: boxOpacity,
            width: boxWidth,
            x: boxX,
            height: boxWidth,
          }}
        />
      </StickyContent>
    </ScrollWrapper>
  );
}

const ScrollWrapper = styled.div`
  height: 200vh;
  background: #f4f6f8;
`;

const StickyContent = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimatedBox = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const IntroTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroText = styled(motion.h1)`
  position: fixed;
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 10;
  font-size: 140px;
  color: #fff;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 16vw;
  }
`;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5], [1.5, 1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "20%", "50%"]); 
  const bgColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#0F3BAE", "#0BC362", "#F0048C"]);

  const text1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.5], [0, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.5, 0.65, 0.75], [0, 1, 0]);
  const text4Opacity = useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 1]);

  return (
    <ScrollWrapper ref={sectionRef}>
      <StickyContent>
        <AnimatedBox style={{ scale, borderRadius, backgroundColor: bgColor }} />

        <AnimatedText style={{ opacity: text1Opacity, top: "10%" }}>
          Simply Zero
        </AnimatedText>
        <AnimatedText style={{ opacity: text2Opacity, top: "30%" }}>
          Squeeze & Go
        </AnimatedText>
        <AnimatedText style={{ opacity: text3Opacity, bottom: "20%" }}>
          Sweet & Tasty
        </AnimatedText>
        <AnimatedText style={{ opacity: text4Opacity, top: "50%", transform: "translateY(-50%)" }}>
          Thanks for scrolling ✨
        </AnimatedText>
      </StickyContent>
    </ScrollWrapper>
  );
}

const ScrollWrapper = styled.div`
  height: 500vh;
  background: #f4f6f8;
`;

const StickyContent = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* 클릭 방지 시 */
`;

const AnimatedBox = styled(motion.div)`
  width: 300px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 
`;

const AnimatedText = styled(motion.div)`
  position: fixed; /* 이 부분도 고정되어야 자연스러움 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 2rem;
  font-weight: bold;

  text-align: center;
`;

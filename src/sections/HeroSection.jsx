import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

 
  const boxWidth = useTransform(scrollYProgress, [0, 0.3, 0.6], [window.innerWidth, window.innerWidth / 2, 200]);
  const boxX = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, window.innerWidth / 2, window.innerWidth - 200]);
  const borderRadius = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "50%"]);
  
  
  const bgColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#00A5E7", "#00A5E7", "#F0048C"]);
  const boxOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 0.3, 0]);

  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.5], [0, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.5, 0.65, 0.75], [0, 1, 0]);
  const text4Opacity = useTransform(scrollYProgress, [0.75, 0.9, 1], [0, 1, 0]);




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
            <motion.span>
              MY UNIQUE{" "}
            </motion.span>
            <motion.span>
              ROUTINE
            </motion.span>
          </IntroText>
        </IntroTextContainer>

        <ScrollText style={{ opacity: text2Opacity, top: "30%" }}>
          Squeeze & Go
        </ScrollText>
        <ScrollText style={{ opacity: text3Opacity, bottom: "20%" }}>
          Sweet & Tasty
        </ScrollText>
        <ScrollText style={{ opacity: text4Opacity, top: "50%", transform: "translateY(-50%)" }}>
          Thanks for scrolling ✨
        </ScrollText>

        {/* ✅ 여기서 박스가 올라오기 시작할 때 글자 색이 바로 바뀌게 연결됨 */}
        <AnimatedBox
  initial={{ y: "100%", opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
  style={{
    backgroundColor: bgColor,
    opacity: boxOpacity,
    borderRadius,
    width: boxWidth,
    x: boxX,
    height: boxWidth, // height도 같게 해서 완전한 원
  }}
/>

      </StickyContent>
    </ScrollWrapper>
  );
}

// --- Styled Components (변경 없음) ---
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

const ScrollText = styled(motion.div)`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  z-index: 9;
`;

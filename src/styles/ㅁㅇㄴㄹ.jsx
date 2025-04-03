import React, { useEffect, useRef, useState } from 'react';
import styled, {  css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import HeroSection from './sections/HeroSection';
import TypoPosterSection from './sections/TypoPosterSection';
import ProductInfoSection from './sections/ProductInfoSection';
import ProductListSection from './sections/ProductListSection';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './sections/Footer';
import FooterScrollProgressBar from "./components/FooterScrollProgressBar";
import ProductDetailSection from './sections/ProductDetailSection';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const horizontalRef1 = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useHorizontalScroll(horizontalRef1, isMobile, 'panel1');


  return (
    <>
      <GlobalStyle />
      <Wrapper isMobile={isMobile}>
        <Header />
        <FooterScrollProgressBar/>
        <HeroSection/>

        
        <HorizontalWrapper ref={horizontalRef1} isMobile={isMobile}>
        <TypoPosterSection
            bg="#0F3BAE"
             leftText="Simply"
            rightText="Zero"
            subtitle={
             <>
              제로칼로리로 <br />
              더 가볍게, 새롭게
             </>
             }
             animate={true}
           hashtag="#설탕ZERO #칼로리50%DOWN"
          />
             <TypoPosterSection
                bg="#0BC362"
                leftText="Squeeze"
                rightText="& Go"
                subtitle="물 없이 더 편리한"
                hashtag="#가년하게짜먹는 #컴팩트스틱"
              />
            <TypoPosterSection
                bg="#F0048C"
                leftText="Sweet &"
                rightText="Tasty"
                   subtitle={
                     <>
                       설탕 대신 알룰로스로 <br />
                       더 맛있게, 가볍게
                      </>
                     }
                   hashtag="#청사과 #납작복숭아"
                 />
             </HorizontalWrapper>

    
        <ProductDetailSection/>
        <ProductInfoSection/>
        <ProductListSection />
        <FinalSection>
          <Footer />
        </FinalSection>
        <ScrollToTopButton />
      </Wrapper>
    </>
  );
}




function useHorizontalScroll(ref, isMobile, panelClass) {
  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;

    let animationFrameId = requestAnimationFrame(() => {
      if (isMobile) return;

      const panels = gsap.utils.toArray(`.${panelClass}`, elem);
  

      if (panels.length === 0) {
        return;
      }

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: elem,
          pin: true,
          scrub: 1.5,
          snap: {
            snapTo: 1 / (panels.length - 1),
            duration: { min: 0.6, max: 1 },
            delay: 0.1,
            ease: 'power1.inOut'
          },
          end: () => `+=${elem.offsetWidth}`,
        },
      });
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [ref, isMobile, panelClass]);
}





const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;

  ${(props) =>
    props.isMobile
      ? css`
          scroll-snap-type: none;
          scroll-behavior: auto;
        `
      : css`
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
        `}
`;



const HorizontalWrapper = styled.section`
  display: flex;
  ${(props) =>
    props.isMobile
      ? css`
          flex-direction: column;
          width: 100vw;
        `
      : css`
          height: 100vh;
          width: 300vw;
          position: relative;
        `}
`;



const FinalSection = styled.section`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
`;


const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const slideUp = `
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = fadeIn + slideUp;
document.head.appendChild(styleSheet);

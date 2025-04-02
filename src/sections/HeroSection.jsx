import { useEffect, useRef } from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  position: relative;
  height: 100vh;
  background-color: #1890ff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroText = styled.h1`
  position: absolute;
  z-index: 10;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  transition: opacity 0.3s;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

const ProductBox = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
  position: absolute;
  z-index: 5;
`;

export default function HeroSection() {
  const productRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const opacity = 1 - Math.min(1, scrollY / 500);
      const translateY = scrollY * 0.3;

      if (productRef.current && textRef.current) {
        productRef.current.style.opacity = opacity.toString();
        productRef.current.style.transform = `translateY(${translateY}px)`;
        textRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SectionContainer>
      <HeroText ref={textRef}>MY DAILY ROUTINE</HeroText>
      <ProductBox ref={productRef} />
    </SectionContainer>
  );
}

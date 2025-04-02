import { useEffect, useRef } from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  min-height: 100vh;
  background-color: #003a8c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
  }
`;

const TextBlock = styled.div`
  color: white;
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
  transform: translateY(30px);
`;

const ProductBox = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  border-radius: 1rem;
  transition: transform 0.4s;
`;

export default function IntroSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const productRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current || !productRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        textRef.current.style.opacity = Math.min(1, progress * 2).toString();
        textRef.current.style.transform = `translateY(${(1 - progress) * 30}px)`;
        productRef.current.style.transform = `translateY(${progress * -10}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SectionContainer ref={sectionRef}>
      <ContentWrapper>
        <TextBlock ref={textRef}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>상쾌환의 속쾌해소 노하우!</h2>
          <p>
            강력한 한 제형에 유효성분을 담은 속쾌해소! <br />
            언제 어디서나 포켓사이즈로 간편하게!
          </p>
        </TextBlock>

        <ProductBox ref={productRef} />
      </ContentWrapper>
    </SectionContainer>
  );
}

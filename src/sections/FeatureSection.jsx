import { useEffect, useRef } from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  padding: 5rem 1rem;
  background-color: #f5f5f5;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  margin-bottom: 3rem;
  color: #666;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureItem = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
`;

export default function FeatureSection() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        itemsRef.current.forEach((el, i) => {
          if (el) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transitionDelay = `${i * 0.15}s`;
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    "효모 추출물",
    "헛개나무열매",
    "산사나무열매",
    "창출",
    "칡꽃",
    "감귤껍질",
  ];

  return (
    <SectionContainer ref={sectionRef}>
      <InnerContainer>
        <Title>과학적 속쾌해소 효과</Title>
        <Description>엄선한 원료와 인체적용시험을 통해 확인된 믿을 수 있는 성분</Description>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
            >
              {feature}
            </FeatureItem>
          ))}
        </FeaturesGrid>
      </InnerContainer>
    </SectionContainer>
  );
}

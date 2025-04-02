import { useEffect, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #f5f5f5;
  padding: 5rem 1rem;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.6s ease;
`;

const ProductBox = styled.div`
  width: 150px;
  height: 150px;
  background-color: #eee;
  margin: 0 auto 1rem;
  border-radius: 0.75rem;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
`;

export default function ProductListSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section || !cardRefs.current.length) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        cardRefs.current.forEach((el, i) => {
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

  const products = [
    "상쾌환 기본형",
    "상쾌환 스틱",
    "상쾌환 부스터",
  ];

  return (
    <Section ref={sectionRef}>
      <Inner>
        <Title>상쾌환 제품 전체 보기</Title>
        <Grid>
          {products.map((product, index) => (
            <Card key={index} ref={(el) => (cardRefs.current[index] = el)}>
              <ProductBox />
              <ProductName>{product}</ProductName>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

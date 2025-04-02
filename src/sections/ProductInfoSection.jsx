import { useEffect, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #e6f7ff;
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
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  margin-bottom: 3rem;
  color: #555;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
`;

export default function ProductInfoSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || cardsRef.current.length === 0) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        cardsRef.current.forEach((el, i) => {
          if (el) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transitionDelay = `${i * 0.2}s`;
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const infos = [
    {
      title: "강력한 제형 기술력",
      desc: "유효성분을 한 제형에 농축한 상쾌환만의 기술력",
    },
    {
      title: "과학적으로 증명된 효과",
      desc: "인체적용시험을 통해 아세트알데히드 감소 효과 입증",
    },
    {
      title: "언제 어디서나 간편하게",
      desc: "포켓사이즈로 휴대와 복용이 간편",
    },
  ];

  return (
    <Section ref={sectionRef}>
      <Inner>
        <Title>상쾌환의 3가지 속쾌 포인트</Title>
        <Description>
          기술력, 검증된 효능, 간편한 휴대성까지 모두 갖춘 제품
        </Description>

        <Grid>
          {infos.map((info, index) => (
            <Card key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{info.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>{info.desc}</p>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

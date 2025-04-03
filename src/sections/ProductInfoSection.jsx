import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const ProductInfoSection = () => {
  const images = [
    "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fsangkwaehwan%2Fswiper_img_hwan.jpg&w=750&q=75",
    "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fsangkwaehwan%2Fswiper_img1.jpg&w=750&q=75",
    "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fsangkwaehwan%2Fswiper_img2.jpg&w=750&q=75",
    "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fsangkwaehwan%2Fswiper_img3.jpg&w=750&q=75",
  ];

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 1500);
    }
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    return () => stopAutoSlide();
  }, []);

  return (
    <Section>
      <Container>
        <ImageBox onMouseEnter={startAutoSlide} onMouseLeave={stopAutoSlide}>
          <ImageSlider style={{ transform: `translateX(-${current * 100}%)` }}>
            {images.map((src, idx) => (
              <Slide key={idx}>
                <ProductImage src={src} alt={`slide-${idx}`} />
              </Slide>
            ))}
          </ImageSlider>
          <IndicatorWrapper>
            {images.map((_, idx) => (
              <Dot
                key={idx}
                active={current === idx}
                onClick={() => setCurrent(idx)}
              >
                {current === idx && <ActiveFill />}
              </Dot>
            ))}
          </IndicatorWrapper>
        </ImageBox>

        <InfoBox>
          <InfoItem>
            <strong>제품명</strong> 상쾌환
          </InfoItem>
          <InfoItem>
            <strong>주요원료</strong> 효모추출물(글루타치온 함유), 헛개나무열매, 산사나무열매 등
          </InfoItem>
          <InfoItem>
            <strong>섭취방법</strong> 음주 전 1포를 물과 함께 드시고, 음주 후 1포 더 드시면 좋습니다.
          </InfoItem>
          <InfoItem>
            <strong>내용량</strong> 3g
          </InfoItem>
          <InfoItem>
            <strong>식품유형</strong> 기타가공품
          </InfoItem>
          <InfoItem>
            <strong>소비기한</strong> 제조일로부터 24개월
          </InfoItem>
          <InfoItem>
            <strong>유통전문판매원</strong> (주)삼양사
          </InfoItem>
          <InfoItem>
            <strong>제조원</strong> (주)네추럴웨이, 이앤에스(주)
          </InfoItem>
        </InfoBox>
      </Container>
    </Section>
  );
};

export default ProductInfoSection;

const Section = styled.section`
  padding: 14rem 6rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  @media (max-width: 768px) {
    padding: 10rem 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

const ImageBox = styled.div`
  flex: 1 1 320px;
  max-width: 480px;
  aspect-ratio: 1 / 1;
  background: #f0f0f0;
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
`;

const ImageSlider = styled.div`
  display: flex;
  transition: transform 0.4s ease-in-out;
`;

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const IndicatorWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled.div`
  width: ${({ active }) => (active ? '50px' : '10px')};
  height: 10px;
  background-color: #aaa;
  border-radius: 9999px;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
`;

const fillAnim = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

const ActiveFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #7B7C7F;
  animation: ${fillAnim} 1.5s linear;
`;

const InfoBox = styled.div`
  flex: 1 1 320px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.95rem;
  color: #222;
`;

const InfoItem = styled.p`
  line-height: 1.6;
  strong {
    display: inline-block;
    width: 6rem;
    color: #000;
  }
`;

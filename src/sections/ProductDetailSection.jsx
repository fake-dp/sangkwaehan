import React from "react";
import styled from "styled-components";

const ProductDetailSection = () => {
  const ingredients = [
    { icon: "💊", label: "효모 추출물\n(그루타치온\n 성분함유)" },
    { icon: "🌿", label: "밀크씨슬\n추출불림" },
    { icon: "🌾", label: "아티초크\n추출불림" },
    { icon: "🍒", label: "비타민 C" },
    { icon: "🌽", label: "그루타민" },
    { icon: "🍊", label: "아르지닌" },
  ];

  return (
    <Section>
      <Left>
        <Headline>
          인체적용시험으로 확인된<br />
          과학적 수치해소 효과
        </Headline>
        <Description>
          식품의약협안전청 가이드라인을 줄수한 인체적용시험 실시 결과,<br />
          유효성분 그루타치온이 수치원인물질인 허중 아세트알데히드의 효과적 감소를 도와줍니다.<br />
          헡개나무열매, 창추, 산사나무열매 등 엄선한 원료를 더했습니다.
        </Description>
        <IconGrid>
          {ingredients.map((item, idx) => (
            <IconItem key={idx}>
              <IconCircle>{item.icon}</IconCircle>
              <Label>{item.label}</Label>
            </IconItem>
          ))}
        </IconGrid>
      </Left>

      <Right>
        <ProductImage
          src="https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fmore_products_1.png&w=1080&q=75"
          alt="product"
        />
      </Right>
    </Section>
  );
};

export default ProductDetailSection;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10rem 2rem;
  background: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 6rem 1rem;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Headline = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  text-align: center;
`;

const IconCircle = styled.div`
  width: 84px;
  height: 84px;
  background-color: #00a5e7;
  color: white;
  font-size: 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.8rem;
`;

const Label = styled.span`
  font-size: 0.85rem;
  white-space: pre-wrap;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 350px;
`;

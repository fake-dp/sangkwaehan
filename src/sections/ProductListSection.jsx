import React from "react";
import styled from "styled-components";

const ProductListSection = () => {
  const products = [
    {
      id: 1,
      title: "상쾌환",
      image: "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fmore_products_1.png&w=1080&q=75",
    },
    {
      id: 2,
      title: "상쾌환 스틱",
      image: "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fmore_products_2.png&w=1080&q=75",
      isNew: true,
    },
    {
      id: 3,
      title: "상쾌환 BOOSTER",
      image: "https://www.easytomorrow.com/_next/image?url=%2Fcommon%2Fimages%2Fproducts%2Fmore_products_3.png&w=1080&q=75",
    },
  ];

  return (
    <Section>
      <Title><strong>상쾌환</strong> 제품 보러가기</Title>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            {product.isNew && <NewBadge>NEW</NewBadge>}
            <ImageWrapper className="image-wrapper">
              <ProductImage src={product.image} alt={product.title} />
              <HoverOverlay>
                <HoverText>상쾌한 하루를 위해!</HoverText>
              </HoverOverlay>

            </ImageWrapper>
            <ProductName>{product.title}</ProductName>
          </ProductCard>
        ))}
      </ProductGrid>
    </Section>
  );
};

export default ProductListSection;

const Section = styled.section`
  padding: 20rem 6rem;
  background-color: #F0F0F0;
  border-radius:6rem;
  margin-bottom: 8rem;
 
  @media (max-width: 768px) {
    padding: 10rem 2rem;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  text-align: left;
  margin-bottom: 4rem;
  padding-left: 1rem;
  strong {
    color: #00a5e7;
  }
  @media (max-width: 768px) {
    font-size: 6vw;
    margin-bottom: 2rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
`;

const ProductCard = styled.div`
  position: relative;
  text-align: center;
  transition: all 0.3s ease;

  &:hover img {
    transform: scale(1.05) rotate(1deg);
   
  }

  &:hover .image-wrapper {
  background: linear-gradient(to bottom, #00a5e7, #b3e6f9);
}
`;

const NewBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #ff007a;
  color: white;
  font-weight: bold;
  padding: 0.3rem 0.7rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  z-index: 11;
  pointer-events: none;
`;

const ImageWrapper = styled.div`
  position: relative;
  background: white;
  border-radius: 1.5rem;
  padding: 1.2rem;
  transition: background 0.3s;
  overflow: hidden;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  transition: transform 0.4s ease;
`;

const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 165, 231, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  pointer-events: none;
`;

const HoverText = styled.p`
  color: white;
  font-size: 0.95rem;
  font-weight: bold;
  data-hover: true;
`;

const ProductName = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: 500;
`;


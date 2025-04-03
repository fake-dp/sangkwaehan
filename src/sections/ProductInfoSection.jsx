import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled.section`
  background-color: #f0f4f8;
  padding: 6rem 1rem;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #222;

  span {
    color: #1890ff;
  }

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
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
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Badge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #ff007a;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 1rem;
  background-color: ${(props) => props.bg || "#eee"};
  margin-bottom: 1.25rem;
`;

const ProductName = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #222;
`;


export default function ProductInfoSection() {
  const products = [
    {
      title: "상쾌환",
      bgColor: "#d1ecff",
      isNew: false,
    },
    {
      title: "상쾌환 스틱",
      bgColor: "#fff",
      isNew: true,
    },
    {
      title: "상쾌환 BOOSTER",
      bgColor: "#fff",
      isNew: false,
    },
  ];

  return (
    <Section>
      <Inner>
        <Title>
          <span>상쾌환</span> 제품 보러가기
        </Title>

        <Grid>
          {products.map((item, index) => (
            <Card
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {item.isNew && <Badge>NEW</Badge>}
              <ImageBox bg={item.bgColor}>
                {/* 추후 이미지 삽입 자리 */}
              </ImageBox>
              <ProductName>{item.title}</ProductName>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

import { useEffect, useRef } from "react";
import styled from "styled-components";

const SectionContainer = styled.section`

`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.7s ease;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProductBox = styled.div`
  width: 250px;
  height: 250px;
  background-color: #eee;
  border-radius: 1rem;
  flex-shrink: 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 1rem 0;

  &:first-child {
    font-weight: bold;
    width: 30%;
  }

  &:last-child {
    color: #555;
  }
`;

export default function DetailSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const visible = rect.top < window.innerHeight && rect.bottom > 0;

      if (visible) {
        contentRef.current.style.opacity = "1";
        contentRef.current.style.transform = "translateY(0)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const details = [
    ["제품명", "상쾌환"],
    ["내용량", "3g"],
    ["식품유형", "기타가공품"],
    ["주요원료", "효모추출물, 헛개열매, 산사, 칡꽃 등"],
    ["섭취방법", "음주 전/후 1포씩 섭취"],
    ["소비기한", "제조일로부터 24개월"],
  ];

  return (
    <SectionContainer ref={sectionRef}>
      <ContentWrapper ref={contentRef}>
        <ProductBox />
        <Table>
          <tbody>
            {details.map(([key, value], index) => (
              <TableRow key={index}>
                <TableCell>{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </ContentWrapper>
    </SectionContainer>
  );
}

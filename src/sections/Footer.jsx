import styled from "styled-components";
import { Facebook, Youtube, Instagram, ChevronDown } from "lucide-react";

const FooterWrapper = styled.footer`
  background-color: #fff;

  padding: 2rem 1rem;
  color: #333;
  font-size: 0.85rem;
  width: 100%;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const InfoText = styled.div`
  line-height: 1.5;
  color: #666;
  flex: 1;
`;

const LogoTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #003a8c;

  span.prefix {
    font-size: 0.75rem;
    margin-right: 0.3rem;
    vertical-align: top;
  }
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconCircle = styled.div`
  background-color: #f5f5f5;
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FamilySite = styled.div`
  background-color: #f5f5f5;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 500;
`;

const Copyright = styled.div`
  margin-top: 2rem;
  color: #999;
  font-size: 0.75rem;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Inner>
        <TopLinks>
          <div>개인정보처리방침</div>
          <div>이용약관</div>
          <div>이메일무단수집거부</div>
          <div>사이트맵</div>
        </TopLinks>

        <MiddleSection>
          <InfoText>
            <LogoTitle>
              <span className="prefix">큐원</span>
              상쾌환
            </LogoTitle>
            (주) 삼양사: 경기도 성남시 분당구 판교로 295 | 사업자 등록번호: 781-85-00412 | 고객문의 전화번호: 080-023-3399<br />
            상쾌환 유통전문판매원: (주)삼양사, 제조원: (주)네추럴웨이, 이앤에스(주)<br />
            * 본 제품은 건강기능식품이 아닙니다.<br />
            * 과도한 음주는 건강을 해칩니다.
          </InfoText>

          <RightBox>
            <IconCircle><Facebook size={16} /></IconCircle>
            <IconCircle><Youtube size={16} /></IconCircle>
            <IconCircle><Instagram size={16} /></IconCircle>
            <FamilySite>
              Family site
              <ChevronDown size={16} />
            </FamilySite>
          </RightBox>
        </MiddleSection>

        <Copyright>
          COPYRIGHT (C) 2025 SAMYANG CORPORATION. ALL RIGHTS RESERVED.
        </Copyright>
      </Inner>
    </FooterWrapper>
  );
}

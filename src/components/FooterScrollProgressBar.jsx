import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ChevronDown } from "lucide-react";

const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 100vw;
  background: white;
  z-index: 1000;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05);
  transition: opacity 0.3s ease;
`;

const Progress = styled.div`
  height: 3px;
  background-color: #1890ff;
  transition: width 0.2s ease;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.25rem; /* 높이 증가 */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #1890ff;
  gap: 0.5rem;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  background-color: #f2f2f2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tabs = styled.ul`
  display: flex;
  gap: 2rem;
  font-size: 0.875rem;
  color: #888;
  font-weight: 500;
  list-style: none; /* 점 제거 */
  padding: 0;
  margin: 0;

  li.active {
    color: #000;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  background-color: #ffeb00;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border-radius: 9999px;
  border: none;
  font-size: 0.9rem;
`;

export default function FooterScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const footerRef = useRef(null);

  useEffect(() => {
    footerRef.current = document.querySelector("footer");

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const percent = (scrollTop / (docHeight - winHeight)) * 100;
      setProgress(percent);

      if (footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top;
        setVisible(footerTop > window.innerHeight);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <BottomBar style={{ opacity: visible ? 1 : 0 }}>
      <Progress style={{ width: `${progress}%` }} />
      <Inner>
        <Left>
          상쾌환
          <Dot>
            <ChevronDown size={14} />
          </Dot>
        </Left>

        <Tabs>
          <li className="active">상쾌환</li>
          <li>제품소개</li>
          <li>포인트</li>
          <li>원료정보</li>
          <li>제품기본정보</li>
        </Tabs>

        <Button>카카오톡 선물하기</Button>
      </Inner>
    </BottomBar>
  );
}

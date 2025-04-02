import { useState, useEffect } from "react";
import styled from "styled-components";
import { MessageCircle, Menu } from "lucide-react";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const HeaderContent = styled.div`
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  color: #003a8c;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .prefix {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    .prefix {
      margin-bottom: 0;
      margin-right: 0.15rem;
    }
  }
`;


const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const IconButton = styled.button`
  background-color: ${(props) => (props.$primary ? "#003a8c" : "#fff")};
  color: ${(props) => (props.$primary ? "#fff" : "#333")};
  border: none;
  border-radius: 9999px;
  padding: 0.5rem;
  margin-top: 2rem;
  width: 60px;
  height: 60px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
  ${(props) =>
    props.$hideOnMobile &&
    `
    @media (max-width: 768px) {
      display: none;
    }
  
  `}
`;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HeaderContainer $scrolled={isScrolled}>
      <HeaderContent>
        <Logo>
          <span className="prefix">큐원</span>
          상쾌환
        </Logo>

        <ButtonGroup>
        <IconButton $hideOnMobile>
            <MessageCircle size={20} />
          </IconButton>
          <IconButton $primary>
            <Menu size={20} />
          </IconButton>
        </ButtonGroup>
      </HeaderContent>
    </HeaderContainer>
  );
}

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const footerTop = footer?.getBoundingClientRect().top || 0;
      const windowHeight = window.innerHeight;
      const shouldShow = window.scrollY > 300 && footerTop > windowHeight;

      setShowButton(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button visible={showButton} onClick={scrollToTop}>
      <FaArrowUp />
    </Button>
  );
}

const Button = styled.button`
  position: fixed;
  bottom: 140px;
  right: 70px;
  background-color: #0F3BAE;
  color: white;
  border: none;
  border-radius: 50%;
  width: 54px;
  height: 54px;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 999;

  &:hover {
    transform: translateY(-3px);
  }
  > svg {
    width: 14px;
    height: 14px;
  }
  @media (max-width: 768px) {
    bottom: 100px;
    right: 20px;
  }
`;

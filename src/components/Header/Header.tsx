"use client";

import { mainColor } from "@/styles/theme";
import styled from "styled-components";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Link from "next/link";

type Props = {
  onClick: () => void;
  isChecked: boolean;
};

const Header = ({ onClick, isChecked }: Props) => {
  return (
    <Container>
      <LeftSection>
        <Link href="/">🐯</Link>
      </LeftSection>
      <RightSection>
        <LinkWrap>
          <a href="/blog">Blog</a>

          <a href="https://velog.io/@jwha/posts" target="_blank">
            Portfolio
          </a>
        </LinkWrap>
        <ThemeToggle onClick={onClick} isChecked={isChecked} />
      </RightSection>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  background: inherit;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 22rem;
`;

const LeftSection = styled.div`
  font-size: 28px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LinkWrap = styled.div`
  display: flex;
  gap: 30px;
  font-weight: bold;
  font-size: 0.8em;

  a {
    position: relative;
    text-align: center;
    line-height: 26px;
    cursor: pointer;
  }
  a::after {
    position: absolute;
    content: "";
    border-bottom: 2px solid ${mainColor.yellow};
    transition: width 0.3s ease-out;
    bottom: 0;
    left: auto;
    right: 0;
    width: 0;
  }
  a:hover::after {
    width: 100%;
    left: 0;
    right: auto;
  }
`;

"use client";

import { mainColor } from "@/styles/theme";
import styled, { useTheme } from "styled-components";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Link from "next/link";
import Image from "next/image";

type Props = {
  onClick: () => void;
  isChecked: boolean;
};

const Header = ({ onClick, isChecked }: Props) => {
  const theme = useTheme();
  return (
    <Container>
      <LeftSection>
        <Link href="/">🐯</Link>
      </LeftSection>
      <RightSection>
        <LinkWrap>
          <Link
            href="https://github.com/magok-developer"
            target="_blank"
            className="github"
          >
            <Image src={theme.icons.github} alt="git" width={20} height={20} />
          </Link>

          <a
            href="https://giddy-product-b00.notion.site/1248f4226cca4b8aaf0d694951985aad"
            target="_blank"
          >
            Resume
          </a>

          <a href="https://velog.io/@jwha/posts" target="_blank">
            Portfolio
          </a>

          <a href="/about">About</a>
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
  padding: 30px 5rem 20px 5rem;
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
  align-items: center;
  gap: 30px;
  font-weight: bold;
  font-size: 0.8em;

  .github {
    display: flex;
  }
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

"use client";

import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/GlobalStyle";
import { darkTheme, lightTheme } from "@/styles/theme";
import Header from "./Header/Header";
import LeftSideBar from "./SideBar/LeftSideBar";
import RightSideBar from "./SideBar/RightSideBar";
import { usePathname } from "next/navigation";

const RootContainer = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(darkTheme);
  const path = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  useEffect(() => {
    if (theme === darkTheme) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Header onClick={toggleTheme} isChecked={theme === lightTheme} />
      <Body>
        {path !== "/about" ? (
          <ContentContainer>
            <LeftSideBar />
            {children}
            <RightSideBar />
          </ContentContainer>
        ) : (
          <div>{children}</div>
        )}
      </Body>
    </ThemeProvider>
  );
};

export default RootContainer;

const Body = styled.div`
  padding: 150px 5rem 50px 5rem;
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 230px 1fr 200px;
  justify-content: center;
  gap: 20px;
`;

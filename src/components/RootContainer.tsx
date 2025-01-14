"use client";

import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/GlobalStyle";
import { darkTheme, lightTheme } from "@/styles/theme";
import Header from "./Header/Header";

const RootContainer = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(darkTheme); // 기본값은 darkTheme으로 설정

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
      <Body>{children}</Body>
    </ThemeProvider>
  );
};

export default RootContainer;

const Body = styled.div`
  padding: 150px 20rem;
`;

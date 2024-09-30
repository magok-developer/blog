// src/app/themes.ts
export type Icons = {
  github: string;
  resume: string;
};

export type Theme = {
  background: string;
  fontColor: string;
  icons: Icons; // Icons 타입으로 변경
};

export const lightTheme: Theme = {
  background: "#EDEDE9",
  fontColor: "#1D1B1B",
  icons: {
    github: "/icons/github-black.svg",
    resume: "/icons/resume-black.svg",
  },
};

export const darkTheme: Theme = {
  background: "#1D1B1B",
  fontColor: "#FFFFFF",
  icons: {
    github: "/icons/github.svg",
    resume: "/icons/resume.svg",
  },
};

export const mainColor = {
  blue: "#4173B9",
  red: "#CE4A7E",
  yellow: "#F3A950",
  lightGray: "#D9D9D9",
  gray: "#AEBCC9",
};

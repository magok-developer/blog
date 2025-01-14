export type Icons = {
  github: string;
  resume: string;
};

export type Theme = {
  background: string;
  fontColor: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  icons: Icons; // Icons 타입으로 변경
};

export const lightTheme: Theme = {
  background: "#EDEDE9",
  fontColor: "#1D1B1B",
  gray1: "#9AA0AC",
  gray2: "#BDC2CE",
  gray3: "#D5D8E1",
  gray4: "#ECEEF4",
  gray5: "#F3F5F9",
  icons: {
    github: "icons/github-black.svg",
    resume: "icons/resume-black.svg",
  },
};

export const darkTheme: Theme = {
  background: "#1D1B1B",
  fontColor: "#FFFFFF",
  gray1: "#F3F5F9",
  gray2: "#ECEEF4",
  gray3: "#D5D8E1",
  gray4: "#BDC2CE",
  gray5: "#9AA0AC",
  icons: {
    github: "icons/github.svg",
    resume: "icons/resume.svg",
  },
};

export const mainColor = {
  blue: "#4173B9",
  red: "#CE4A7E",
  yellow: "#F3A950",
  lightGray: "#F3F5F9",
  gray: "#9AA0AC",
};

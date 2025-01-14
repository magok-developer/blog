// import { mainColor } from "@/styles/theme";
import Image from "next/image";
// import styled from "styled-components";

type Props = {
  onClick: () => void;
  isChecked: boolean;
};

const ThemeToggle = ({ onClick, isChecked }: Props) => {
  return (
    <>
      {isChecked ? (
        <Image
          src="icons/dark.svg"
          alt="dark"
          width={20}
          height={20}
          onClick={onClick}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <Image
          src="icons/light.svg"
          alt="dark"
          width={20}
          height={20}
          onClick={onClick}
          style={{ cursor: "pointer" }}
        />
      )}
    </>
  );
};

export default ThemeToggle;

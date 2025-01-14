import { mainColor } from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

const LeftSideBar = () => {
  return (
    <Container>
      <Image
        src="image/me.png"
        alt="me"
        width={140}
        height={140}
        className="me"
      />
      <TextWrap>
        <NameText>JIWON</NameText>
        <JobText>Frontend Developer</JobText>
      </TextWrap>
    </Container>
  );
};

export default LeftSideBar;

const Container = styled.div`
  height: fit-content;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 20px 12px;
  background-color: ${mainColor.lightGray};
  border-radius: 8px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const NameText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #1d1b1b;
  font-style: italic;
`;

const JobText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${mainColor.gray};
`;

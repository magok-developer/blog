import { mainColor } from "@/styles/theme";
import styled from "styled-components";

const text = ["Next.js", "CSS", "UX"];

const RightSideBar = () => {
  return (
    <Container>
      <TextWrap>
        <Tags>Tags</Tags>
        {text.map((item, index) => (
          <TagContent key={index}>{item}</TagContent>
        ))}
      </TextWrap>
    </Container>
  );
};

export default RightSideBar;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 12px 20px 12px;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Tags = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const TagContent = styled.span`
  font-size: 14px;
  white-space: pre-wrap;
  &:hover {
    color: ${mainColor.yellow};
    cursor: pointer;
  }
`;

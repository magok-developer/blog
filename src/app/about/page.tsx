"use client";

import styled from "styled-components";

// const text = [
//   "안녕하세요. 1년차 프론트엔드 개발자 하지원 입니다!",
//   "사용자를 위한 화면을 만드는것이 즐거워 개발을 시작했습니다.",
// ];

const Page = () => {
  return (
    <Container>
      {/* <img src="image/about.jpeg" alt="about" className="about" /> */}
      {/* <TextWrap>
        {text.map((item, index) => (
          <IntroText key={index}>{item}</IntroText>
        ))}
      </TextWrap> */}
    </Container>
  );
};

export default Page;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* .about {
    width: 20%;
    margin-bottom: 20px;
  } */
`;

// const TextWrap = styled.div`
//   display: flex;
//   align-items: flex-start;
//   flex-direction: column;
//   gap: 16px;
// `;

// const IntroText = styled.span`
//   font-size: 14px;
//   white-space: pre-wrap;
// `;

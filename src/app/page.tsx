"use client";

import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <First>
        <RightSection>
          <span className="name">JIWON</span>
          <span className="intro">어쩌고 저쩌고 소개입니다.</span>
          <IconWrap></IconWrap>
        </RightSection>
      </First>

      <Archives>
        <div className="archive">Archives</div>
        <Category>
          <div className="category">Category</div>
        </Category>
      </Archives>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  gap: 12px;

  .name {
    font-size: 30px;
    font-weight: bold;
  }

  .intro {
    font-size: 14px;
  }
`;

const IconWrap = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 12px;

  .git {
    opacity: 0;
  }

  .resume {
    opacity: 0;
  }
`;

const First = styled.div`
  display: flex;
  position: relative;

  .me {
    margin-right: 20px;
  }

  .heart {
    position: absolute;
    opacity: 0;
    transition: 0.2s all ease-in-out;
  }

  &:hover {
    .heart {
      opacity: 1;
    }
  }

  .one {
    transform: rotate(23deg);
    top: 20px;
    left: 130px;
  }
  .two {
    transform: rotate(-23deg);
    top: 20px;
    left: 20px;
  }
  .three {
    transform: rotate(10deg);
    top: -3px;
    left: 110px;
  }
  .four {
    transform: rotate(-15deg);
    top: -3px;
    left: 35px;
  }
`;

const Archives = styled.div`
  padding: 100px 40px;
  .archive {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 100px;
  }
`;

const Category = styled.div`
  .category {
    font-size: 30px;
    font-weight: bold;
  }
`;

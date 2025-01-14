"use client";

import Image from "next/image";
import Link from "next/link";
import styled, { useTheme } from "styled-components";

export default function Home() {
  const theme = useTheme();
  return (
    <Container>
      <First>
        <div className="heart one">❤️</div>
        <div className="heart two">❤️</div>
        <div className="heart three">❤️</div>
        <div className="heart four">❤️</div>
        <Image
          src={`${process.env.assetPrefix}/image/me.png`} // 절대 경로 수정
          alt="me"
          width={160}
          height={160}
        />
        <RightSection>
          <span className="name">JIWON</span>
          <span className="intro">어쩌고 저쩌고 소개입니다.</span>
          <IconWrap>
            <Git>
              <Link href="https://github.com/magok-developer" target="_blank">
                <Image
                  src={`${process.env.assetPrefix}${theme.icons.github}`} // 경로 수정
                  alt="git"
                  width={22}
                  height={22}
                />
              </Link>
            </Git>
            <Resume>
              <Link
                href="https://giddy-product-b00.notion.site/1248f4226cca4b8aaf0d694951985aad"
                target="_blank"
              >
                <Image
                  src={`${process.env.assetPrefix}${theme.icons.resume}`} // 경로 수정
                  alt="resume"
                  width={22}
                  height={22}
                />
              </Link>
            </Resume>
          </IconWrap>
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

const Git = styled.div`
  position: relative;
  &:hover {
    .git {
      opacity: 1;
    }
  }
`;

const Resume = styled.div`
  position: relative;
  &:hover {
    .resume {
      opacity: 1;
    }
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

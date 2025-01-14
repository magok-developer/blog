"use client";

import styled from "styled-components";

export default function Home() {
  return <Container>가운데 컨텐츠</Container>;
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

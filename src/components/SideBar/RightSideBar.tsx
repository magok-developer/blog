import styled from "styled-components";

const RightSideBar = () => {
  return <Container>right</Container>;
};

export default RightSideBar;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  padding: 1rem;

  border-radius: 16px;
`;

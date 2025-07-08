import React from "react"; //, { Suspense }
import Header from "./components/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  @media (max-width: 768px) {
    overflow: auto;
  }
`;

const MainContent = styled.main`
  display: flex;
  flex: 1;
  padding: 30px;
  gap: 50px;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    padding: 16px 4px 16px 4px;
    overflow-y: visible;
    max-width: 100%;
    margin: 0;
  }
`;

const UserCardContainer = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  justify-content: center;
  @media (min-width: 769px) {
    max-width: none;
    width: 33%;
    justify-content: flex-end;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const ContentBarContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  @media (min-width: 769px) {
    max-width: none;
    width: 67%;
    justify-content: flex-start;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const UserCard = React.lazy(() => import("userCard/UserCard"));
const ContentBar = React.lazy(() => import("contentBar/ContentBar"));

export default function App() {
  return (
    <Wrapper>
      <Header />
      <MainContent>
        <UserCardContainer>
          <UserCard />
        </UserCardContainer>
        <ContentBarContainer>
          <ContentBar />
        </ContentBarContainer>
      </MainContent>
    </Wrapper>
  );
}

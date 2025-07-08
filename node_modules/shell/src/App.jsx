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
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const UserCard = React.lazy(() => import("userCard/UserCard"));
const ContentBar = React.lazy(() => import("contentBar/ContentBar"));

export default function App() {
  return (
    <Wrapper>
      <Header />
      <MainContent>
        {/* <Suspense fallback={<div>Loading User Card...</div>}> */}
        <UserCard />
        {/* </Suspense>
        <Suspense fallback={<div>Loading Content Bar...</div>}> */}
        <ContentBar />
        {/* </Suspense> */}
      </MainContent>
    </Wrapper>
  );
}

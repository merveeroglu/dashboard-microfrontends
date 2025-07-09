import React, { Suspense } from "react";
import Header from "./components/Header";
import {
  ContentBarContainer,
  Layout,
  Main,
  UserCardContainer,
} from "./components/StyledComponents";

const UserCard = React.lazy(() => import("userCard/UserCard"));
const ContentBar = React.lazy(() => import("contentBar/ContentBar"));

export default function App() {
  return (
    <Layout>
      <Header />
      <Main>
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <UserCardContainer>
            <UserCard />
          </UserCardContainer>
          <ContentBarContainer>
            <ContentBar />
          </ContentBarContainer>
        </Suspense>
      </Main>
    </Layout>
  );
}

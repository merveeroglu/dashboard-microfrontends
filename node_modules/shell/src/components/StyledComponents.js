import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 64px;
  background-color: #007bff;
  color: white;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const AppTitle = styled.h1`
  font-size: 1rem;
`;

export const Profile = styled.span`
  font-size: 1rem;
  cursor: pointer;
`;
export const Layout = styled.div`
  min-height: 100vh;
  background: #f5f7fa;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  padding: 40px 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 24px 0;
  }
`;

export const UserCardContainer = styled.div`
  flex: 1 1 320px;
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    max-width: 500px;
  }
`;

export const ContentBarContainer = styled.div`
  flex: 2 1 600px;
  max-width: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    max-width: 500px;
  }
`;
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
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

const AppTitle = styled.h1`
  font-size: 1rem;
`;

const Profile = styled.span`
  font-size: 1rem;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <AppTitle>My Microfrontend App</AppTitle>
      <Profile>Profil</Profile>
    </HeaderWrapper>
  );
};

export default Header;

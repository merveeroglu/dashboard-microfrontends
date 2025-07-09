import React from 'react';
import { AppTitle, HeaderWrapper, Profile } from './StyledComponents';

const Header = () => {
  return (
    <HeaderWrapper>
      <AppTitle>My Microfrontend App</AppTitle>
      <Profile>Profil</Profile>
    </HeaderWrapper>
  );
};

export default Header;

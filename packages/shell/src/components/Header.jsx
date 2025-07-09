import React from "react";
import styled from "styled-components";

const HeaderBar = styled.header`
  /* width: 100%; */
  background: #0a7cff;
  color: #fff;
  padding: 0 32px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(10, 124, 255, 0.08);
  @media (max-width: 600px) {
    padding: 0 12px;
    font-size: 1rem;
    height: 52px;
  }
`;

const ProfileButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background 0.2s;
  &:hover {
    background: rgba(255,255,255,0.12);
  }
`;

export default function Header() {
  return (
    <HeaderBar>
      <span>My Microfrontend App</span>
      <ProfileButton>Profil</ProfileButton>
    </HeaderBar>
  );
}

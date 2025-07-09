import styled from "styled-components";

export const UserCardWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  min-height: 500px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 32px 24px 24px 24px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    max-width: 500px;
    min-height: unset;
    padding: 24px 12px 20px 12px;
  }
`;

export const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  margin: 55px 0 18px 0;
  border: 4px solid #e0e7ef;
`;

export const Name = styled.h2`
  font-size: 2rem;
  margin: 12px 0 0 0;
  color: #222;
  font-weight: 700;
`;

export const Info = styled.div`
  font-size: 1.1rem;
  color: #444;
  margin: 8px 0;
  width: 100%;
  text-align: center;
`;

export const Button = styled.button`
  background: #0a7cff;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 12px 0;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 24px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #005fa3;
  }
`;

export const NotificationIcon = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  font-size: 2rem;
  color: #0a7cff;
  user-select: none;
  z-index: 2;
`;

export const Badge = styled.span`
  background: #ff3b3b;
  color: #fff;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 0.9rem;
  position: absolute;
  top: -10px;
  right: -10px;
  font-weight: 700;
  pointer-events: none;
`;

export const NotificationPopupWrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 24px;
  width: 300px;
  max-height: 320px;
  background: #fff;
  border: 1px solid #e0e7ef;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(10, 124, 255, 0.1);
  padding: 16px;
  overflow-y: auto;
  z-index: 10;
`;

export const NotificationItem = styled.div`
  font-size: 1rem;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #ff3b3b;
  font-weight: 700;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    color: #a71d2a;
  }
`;

export const DismissButton = styled.button`
  background: #0a7cff;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 10px 0;
  border-radius: 10px;
  margin-top: 16px;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;

  &:hover {
    background: #005fa3;
  }
`;

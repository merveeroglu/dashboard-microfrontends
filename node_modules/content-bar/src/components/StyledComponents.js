import styled from "styled-components";

export const ContentBarWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  min-height: 500px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    max-width: 500px;
    min-height: unset;
    padding: 24px 12px;
  }
`;

export const ContentCard = styled.div`
  background: #f7faff;
  border-radius: 14px;
  padding: 18px 16px;
  margin-bottom: 18px;
  box-shadow: 0 2px 8px rgba(10, 124, 255, 0.06);
  transition: all 0.3s ease;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 20px rgba(10, 124, 255, 0.18);
    transform: translateY(-4px);
    background: #eef6ff;
  }
`;

export const Title = styled.h3`
  margin: 0 0 8px 0;
  font-weight: 700;
  color: #1a2a3a;
  font-size: 1.2rem;
  box-sizing: border-box;
`;

export const Description = styled.p`
  margin: 0;
  color: #4a5a6a;
  font-size: 1rem;
  box-sizing: border-box;
`;

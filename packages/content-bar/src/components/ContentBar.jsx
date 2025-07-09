import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  min-height: 500px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 32px 24px;
  margin: 0 auto;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    max-width: 500px;
    min-height: unset;
    padding: 24px 12px;
  }
`;

const ContentCard = styled.div`
  background: #f7faff;
  border-radius: 14px;
  padding: 18px 16px;
  margin-bottom: 18px;
  box-shadow: 0 2px 8px rgba(10, 124, 255, 0.06);
  transition: box-shadow 0.2s;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0 4px 16px rgba(10, 124, 255, 0.12);
  }
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  font-weight: 700;
  color: #1a2a3a;
  font-size: 1.2rem;
  box-sizing: border-box;
`;

const Description = styled.p`
  margin: 0;
  color: #4a5a6a;
  font-size: 1rem;
  box-sizing: border-box;
`;

const mockContents = [
  {
    id: 1,
    title: "React Öğreniyorum",
    description: "React ile frontend geliştirmeye başlamak için temel bilgiler.",
  },
  {
    id: 2,
    title: "Microfrontend Nedir?",
    description: "Microfrontend mimarisi hakkında genel bilgi ve faydaları.",
  },
  {
    id: 3,
    title: "Styled Components Kullanımı",
    description: "CSS-in-JS ile stil yönetimi ve avantajları.",
  },
];

export default function ContentBar() {
  return (
    <Container>
      {mockContents.map(({ id, title, description }) => (
        <ContentCard key={id}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </ContentCard>
      ))}
    </Container>
  );
}

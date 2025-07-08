import React from "react";
import styled from "styled-components";

// Mock Content Verisi
const mockContents = [
  {
    id: 1,
    title: "React Öğreniyorum",
    description:
      "React ile frontend geliştirmeye başlamak için temel bilgiler.",
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
  {
    id: 4,
    title: "TypeScript ile Tanışın",
    description:
      "Statik tip kontrolü ile daha güvenli ve ölçeklenebilir projeler geliştirin.",
  },
];

// Styled Components
const Container = styled.div`
  /* width: 500px;  */
  min-height: 500px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;
  /* overflow-y: auto; */
  @media (max-width: 768px) {
    min-height: 600px;
  }
`;

const ContentCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgb(0 0 0 / 0.15);
  }
`;

const Title = styled.h3`
  margin: 0 0 8px;
  font-weight: 700;
  color: #222;
`;

const Description = styled.p`
  margin: 0;
  color: #555;
  font-size: 0.9rem;
  line-height: 1.3;
`;

// Component
const ContentBar = () => {
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
};

export default ContentBar;

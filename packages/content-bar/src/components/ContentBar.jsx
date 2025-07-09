import React from "react";
import { ContentBarWrapper, ContentCard, Description, Title } from "./StyledComponents";

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
    <ContentBarWrapper>
      {mockContents.map(({ id, title, description }) => (
        <ContentCard key={id}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </ContentCard>
      ))}
    </ContentBarWrapper>
  );
}

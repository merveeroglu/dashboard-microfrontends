import React, { Suspense } from "react";

const UserCard = React.lazy(() => import("userCard/UserCard"));
const ContentBar = React.lazy(() => import("contentBar/ContentBar"));

export default function App() {
  return (
    <div>
      <h1>Shell Container App</h1>
      <Suspense fallback={<div>Loading User Card...</div>}>
        <UserCard />
      </Suspense>
      <Suspense fallback={<div>Loading Content Bar...</div>}>
        <ContentBar />
      </Suspense>
    </div>
  );
}

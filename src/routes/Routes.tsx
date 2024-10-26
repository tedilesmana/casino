// src/routes/Routes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import GamePage from "../views/pages/GamePage"; // Path to your GamePage

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GamePage />} />
      <Route path="/about" element={<GamePage />} />
    </Routes>
  );
};

export default AppRoutes;

// src/routes/Routes.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TopGames from "../views/pages/TopGames";
import JackpotsGames from "../views/pages/JackpotsGames";
import NewGames from "../views/pages/NewGames";
import SlotsGames from "../views/pages/SlotsGames";
import LiveGames from "../views/pages/LiveGames";
import BlackjackGames from "../views/pages/BlackjackGames";
import RouletteGames from "../views/pages/RouletteGames";
import TableGames from "../views/pages/TableGames";
import PokerGames from "../views/pages/PokerGames";
import OtherGames from "../views/pages/OtherGames";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/top" />} />
      <Route path="/top" element={<TopGames />} />
      <Route path="/new" element={<NewGames />} />
      <Route path="/slots" element={<SlotsGames />} />
      <Route path="/jackpots" element={<JackpotsGames />} />
      <Route path="/live" element={<LiveGames />} />
      <Route path="/blackjack" element={<BlackjackGames />} />
      <Route path="/roulette" element={<RouletteGames />} />
      <Route path="/table" element={<TableGames />} />
      <Route path="/poker" element={<PokerGames />} />
      <Route path="/other" element={<OtherGames />} />
    </Routes>
  );
};

export default AppRoutes;

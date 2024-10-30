import React, { createContext, useState, useEffect } from "react";
import { fetchGames, fetchJackpots } from "../../core/services/apiService";

export const GameContext = createContext({
  games: [],
  loading: true,
  jackpots: [],
  error: null,
  activeLink: "/top",
  setActiveLink: (link: string) => {},
  isOpen: false,
  setIsOpen: (open: boolean) => {},
});

export const GameProvider = ({ children }: any) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jackpots, setJackpots] = useState([]);
  const [error, setError] = useState(null);
  const [activeLink, setActiveLink] = useState<string>("/top");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Menggunakan Promise.all untuk melakukan fetching secara paralel
        const [gamesData, jackpotsData] = await Promise.all([
          fetchGames(),
          fetchJackpots(),
        ]);

        // Set data dari hasil fetching
        setGames(gamesData);
        setJackpots(jackpotsData);
      } catch (err: any) {
        setError(err.message);
        console.error("Error fetching data:", err.message);
      } finally {
        // Selesai loading setelah kedua request selesai
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <GameContext.Provider
      value={{
        games,
        loading,
        jackpots,
        error,
        activeLink,
        setActiveLink,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

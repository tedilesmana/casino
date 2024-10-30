import { useState, useEffect } from "react";
import { fetchGames } from "../services/apiService";
import { GameCardProps } from "../../views/components/GameCard";

export const useFetchGames = () => {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchGames();
        setGames(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { games, loading, error };
};

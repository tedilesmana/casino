import { useState, useEffect } from "react";
import { fetchJackpots } from "../services/apiService";

export const useFetchJackpot = (interval: number = 10000) => {
  const [jackpots, setJackpots] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchJackpots();
        setJackpots(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // First fetch
    fetchData();

    // Fetch every few seconds based on interval
    const intervalId = setInterval(fetchData, interval);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [interval]);

  return { jackpots, loading, error };
};

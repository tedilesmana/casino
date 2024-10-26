const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchGames = async () => {
  const response = await fetch(`${API_BASE_URL}/games.php`);
  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }
  return response.json();
};

export const fetchJackpots = async () => {
  const response = await fetch(`${API_BASE_URL}/jackpots.php`);

  if (!response.ok) {
    throw new Error("Failed to fetch jackpots");
  }

  const data = await response.json();
  return data; // Pastikan data yang dikembalikan sesuai dengan struktur yang diharapkan
};

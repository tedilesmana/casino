import {
  GameCardProps,
  GameJackpotProps,
} from "../../views/components/GameCard";

export const useFetchGamesByCategory = (
  games: GameCardProps[],
  activeLink: string,
  jackpots: GameJackpotProps[]
) => {
  // Function to categorize games
  const categorizeGame = (game: any) => {
    if (
      game.categories.includes("ball") ||
      game.categories.includes("virtual") ||
      game.categories.includes("fun")
    ) {
      return "other"; // Group into "Other" category
    }
    return game.categories; // Return original categories for other games
  };

  // Filter games based on selected category
  const listGames = activeLink
    ? activeLink === "jackpots" // Check if the selected category is "jackpots"
      ? games.filter((game: any) =>
          jackpots.some((jackpot: any) => jackpot.game === game.id)
        ) // Filter based on jackpots
      : games.filter((game: any) => {
          const gameCategories = categorizeGame(game);
          return Array.isArray(gameCategories)
            ? gameCategories.includes(activeLink)
            : gameCategories === activeLink;
        })
    : games;

  const getJackpotAmount = (gameId: string) => {
    const jackpot = jackpots.find((j: GameJackpotProps) => j.game === gameId); // Check if the game has a jackpot
    return jackpot ? jackpot.amount : null; // Return the jackpot amount or null if no jackpot
  };

  return { listGames, getJackpotAmount };
};

// src/views/pages/GamePage.tsx
import React, { useState } from "react";
import { useFetchGames } from "../../core/hooks/useFetchGames";
import { useFetchJackpot } from "../../core/hooks/useFetchJackpot"; // Import useFetchJackpot
import Navbar from "../components/Navbar";
import { ContentWrapper } from "../../styles/Container";
import { GridSystem } from "../../styles/GridLayout";
import Loader from "../components/Loader"; // Import Loader
import ErrorMessage from "../components/ErrorMessage"; // Import ErrorMessage
import GameCard from "../components/GameCard";

const GamePage: React.FC = () => {
  const { games, loading, error } = useFetchGames();
  const {
    jackpots,
    loading: jackpotLoading,
    error: jackpotError,
  } = useFetchJackpot(10000); // Set interval to 10 seconds
  const [selectedCategory, setSelectedCategory] = useState<string | null>('new'); // State for selected category

  // Function to handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

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

  // Function to find jackpot amount for a specific game
  const getJackpotAmount = (gameId: string) => {
    const jackpot = jackpots.find((j) => j.game === gameId); // Check if the game has a jackpot
    return jackpot ? jackpot.amount : null; // Return the jackpot amount or null if no jackpot
  };

  // Filter games based on selected category
  const filteredGames = selectedCategory
    ? selectedCategory === "jackpots" // Check if the selected category is "jackpots"
      ? games.filter((game) =>
          jackpots.some((jackpot) => jackpot.game === game.id)
        ) // Filter based on jackpots
      : games.filter((game) => {
          const gameCategories = categorizeGame(game);
          return Array.isArray(gameCategories)
            ? gameCategories.includes(selectedCategory)
            : gameCategories === selectedCategory;
        })
    : games;

  return (
    <>
      <Navbar onCategorySelect={handleCategorySelect} />
      {/* Pass the handler to Navbar */}
      <ContentWrapper
        desktopPaddingVertical="120px"
        desktopPaddingHorizontal="200px"
        tabletPaddingVertical="80px"
        tabletPaddingHorizontal="15px"
        mobilePaddingVertical="80px"
        mobilePaddingHorizontal="0px"
      >
        {loading || jackpotLoading ? ( // Show loader if either game or jackpot is loading
          <Loader />
        ) : error || jackpotError ? ( // Show error if either game or jackpot fetch fails
          <ErrorMessage
            message={error || jackpotError || ""}
            onRetry={() => window.location.reload()}
          />
        ) : (
          <GridSystem
            desktopColumns={5}
            tabletColumns={3}
            mobileColumns={1}
            horizontalGap="20px"
            verticalGap="50px"
          >
            {filteredGames.map((game: any) => (
              <GameCard
                key={game.id}
                name={game.name}
                image={`http:${game.image}`}
                jackpotAmount={getJackpotAmount(game.id)}
                categories={game.categories}
              />
            ))}
          </GridSystem>
        )}
      </ContentWrapper>
    </>
  );
};

export default GamePage;

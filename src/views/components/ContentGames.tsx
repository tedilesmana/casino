import React from "react";
import { ContentWrapper } from "../../styles/Container";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { GridSystem } from "../../styles/GridLayout";
import GameCard, { GameCardProps } from "./GameCard";

const ContentGames = ({
  loading,
  error,
  listGames,
  getJackpotAmount,
}: {
  loading: boolean;
  error: any;
  listGames: GameCardProps[];
  getJackpotAmount: any;
}) => {
  return (
    <React.Fragment>
      <ContentWrapper
        desktopPaddingVertical="70px"
        desktopPaddingHorizontal="50px"
        tabletPaddingVertical="70px"
        tabletPaddingHorizontal="15px"
        mobilePaddingVertical="70px"
        mobilePaddingHorizontal="10px"
      >
        {loading ? ( // Show loader if either game or jackpot is loading
          <Loader />
        ) : error ? ( // Show error if either game or jackpot fetch fails
          <ErrorMessage
            message={error || ""}
            onRetry={() => window.location.reload()}
          />
        ) : (
          <GridSystem
            desktopColumns={5}
            tabletColumns={3}
            mobileColumns={1}
            horizontalGap="20px"
            verticalGap="40px"
          >
            {listGames.map((game: GameCardProps) => (
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
    </React.Fragment>
  );
};

const areEqual = (
  prevProps: {
    loading: boolean;
    listGames: GameCardProps[];
  },
  nextProps: {
    loading: boolean;
    listGames: GameCardProps[];
  }
) => {
  // Check if loading has changed
  if (prevProps.loading !== nextProps.loading) {
    return false; // Re-render if loading state changes
  }

  // Check if the length of listGames has changed
  if (prevProps.listGames.length !== nextProps.listGames.length) {
    return false; // Re-render if the number of games changes
  }

  // Check if each element in listGames has changed based on id
  for (let i = 0; i < prevProps.listGames.length; i++) {
    if (prevProps.listGames[i].id !== nextProps.listGames[i].id) {
      return false; // Re-render if any game id has changed
    }
  }

  // If there are no changes to loading or listGames, do not re-render
  return true;
};

export default React.memo(ContentGames, areEqual);

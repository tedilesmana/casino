import { useContext } from "react";
import { GameContext } from "../../redux/context/GameContext";
import Navbar from "../components/Navbar";
import { useFetchGamesByCategory } from "../../core/hooks/useFetchGamesByCategory";
import ContentGames from "../components/ContentGames";
import { GameCardProps, GameJackpotProps } from "../components/GameCard";

const PokerGames = () => {
  const {
    games,
    loading,
    error,
    jackpots,
    activeLink,
  }: {
    games: GameCardProps[];
    loading: boolean;
    error: any;
    jackpots: GameJackpotProps[];
    activeLink: string;
  } =
    useContext(GameContext);

  const { listGames, getJackpotAmount } = useFetchGamesByCategory(
    games,
    activeLink,
    jackpots
  );

  return (
    <>
      <Navbar />
      <ContentGames
        loading={loading}
        error={error}
        listGames={listGames}
        getJackpotAmount={getJackpotAmount}
      />
    </>
  );
};

export default PokerGames;


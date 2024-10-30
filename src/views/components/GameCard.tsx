import React from "react";
import {
  GameImage,
  Card,
  Overlay,
  PlayButton,
  Ribbon,
  JackpotOverlay,
} from "./GameCardStyles"; // Import JackpotOverlay styling
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

export interface GameCardProps {
  id?: string;
  name: string;
  image: string;
  jackpotAmount?: number;
  categories?: string[]; // Add categories prop
}

export interface GameJackpotProps {
  game?: string;
  amount: string;
}

const GameCard: React.FC<GameCardProps> = React.memo(
  ({ name, image, jackpotAmount, categories = [] }) => {
    const isNew = categories.includes("new");
    const isTop = categories.includes("top");

    const formattedJackpotAmount = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2, // Untuk memastikan dua digit desimal
      maximumFractionDigits: 2, // Maksimal dua digit desimal
    }).format(jackpotAmount ?? 0);

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card>
          {isNew && (
            <Ribbon position="left" className="new">
              New
            </Ribbon>
          )}
          {isTop && (
            <Ribbon position="right" className="top">
              Top
            </Ribbon>
          )}
          <GameImage src={image} alt={name} loading="lazy" />
          <Overlay>
            <PlayButton>
              <FaPlay /> Play
            </PlayButton>
            <div>{name}</div>
          </Overlay>
          {jackpotAmount && (
            <JackpotOverlay>
              <p className="jackpot-amount">
                Jackpot: {formattedJackpotAmount}
              </p>
            </JackpotOverlay>
          )}
        </Card>
      </motion.div>
    );
  }
);

export default GameCard;

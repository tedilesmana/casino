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

interface GameCardProps {
  name: string;
  image: string;
  jackpotAmount?: number;
  categories?: string[]; // Add categories prop
}

const GameCard: React.FC<GameCardProps> = React.memo(
  ({ name, image, jackpotAmount, categories = [] }) => {
    const isNew = categories.includes("new");
    const isTop = categories.includes("top");

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
              <p className="jackpot-amount">Jackpot: {jackpotAmount}</p>
            </JackpotOverlay>
          )}
        </Card>
      </motion.div>
    );
  }
);

export default GameCard;

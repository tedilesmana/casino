// src/components/GameCardStyles.tsx
import styled from "styled-components";

export const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #fcfcfc;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.2s;
  position: relative;

  /* Removed transform transition from here for smoother animation */
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const GameImage = styled.img`
  width: 100%;
  height: auto; /* Ensures the image retains its aspect ratio */
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.2s;

  ${Card}:hover & {
    opacity: 1; /* Show overlay on hover */
  }
`;

export const PlayButton = styled.button`
  background-color: #8dc63f; /* Green background for the play button */
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.8; /* Slightly dim on hover */
  }

  svg {
    margin-right: 5px; /* Space between icon and text */
  }
`;

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 10px 0; /* Space between categories and title */
`;

interface RibbonProps {
  position: "left" | "right";
}

export const Ribbon = styled.div<RibbonProps>`
  position: absolute;
  top: 0;
  ${({ position }) =>
    position === "left"
      ? `
          left: 0;
          border-radius: 0 0 10px 0;
        `
      : `
          right: 0;
          border-radius: 0 0 0 10px;
        `} /* Sudut bulat dinamis berdasarkan posisi */
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 20;
`;

export const JackpotOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7); // Overlay hitam dengan opacity
  color: white; // Teks warna putih
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
  font-weight: bold;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  .jackpot-amount {
    margin: 0;
  }
`;

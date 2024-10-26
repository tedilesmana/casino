import React from "react";
import { render, screen } from "@testing-library/react";
import GamePage from "../views/pages/GamePage";
import { useFetchGames } from "../core/hooks/useFetchGames";
import { useFetchJackpot } from "../core/hooks/useFetchJackpot";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom"; // Impor MemoryRouter
import { theme } from "../styles/theme";

// Mocking the hooks
jest.mock("../core/hooks/useFetchGames");
jest.mock("../core/hooks/useFetchJackpot");

describe("GamePage", () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  test("renders game cards when games and jackpots are successfully loaded", () => {
    // Mock the data to be returned from the hooks
    (useFetchGames as jest.Mock).mockReturnValue({
      games: [
        {
          id: "1",
          name: "Game 1",
          image: "//example.com/image1.png",
          categories: ["new"],
        },
        {
          id: "2",
          name: "Game 2",
          image: "//example.com/image2.png",
          categories: ["new"],
        },
      ],
      loading: false,
      error: null,
    });

    (useFetchJackpot as jest.Mock).mockReturnValue({
      jackpots: [
        { game: "1", amount: 1000 },
        { game: "2", amount: 2000 },
      ],
      loading: false,
      error: null,
    });

    // Render the GamePage component with ThemeProvider and MemoryRouter
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <GamePage />
        </ThemeProvider>
      </MemoryRouter>
    );

    // Assertions
    expect(screen.getByText("Game 1")).toBeInTheDocument();
    expect(screen.getByText("Game 2")).toBeInTheDocument();
    expect(screen.getByText(/Jackpot: 1000/)).toBeInTheDocument();
    expect(screen.getByText(/Jackpot: 2000/)).toBeInTheDocument();
    expect(screen.queryByText(/Loading.../)).not.toBeInTheDocument();
    expect(screen.queryByText(/Error:/)).not.toBeInTheDocument();
  });
});

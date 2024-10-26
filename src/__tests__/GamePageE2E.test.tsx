import React from "react";
import { render, screen } from "@testing-library/react";
import GamePage from "../views/pages/GamePage";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { theme } from "../styles/theme";

describe("GamePage E2E Test", () => {
    let originalError: any;
  
    beforeAll(() => {
      // Store the original console.error
      originalError = console.error;
  
      // Mock console.error to suppress specific warnings
      console.error = (...args) => {
        if (
          typeof args[0] === 'string' &&
          args[0].includes("prop on a DOM element")
        ) {
          return; // Ignore this specific warning
        }
        originalError(...args); // Call the original console.error for other warnings
      };
    });
  
    afterAll(() => {
      // Restore the original console.error after tests
      console.error = originalError;
    });
  
    test("fetches and displays games and jackpots from API", async () => {
      // Render the GamePage component
      render(
        <MemoryRouter>
          <ThemeProvider theme={theme}>
            <GamePage />
          </ThemeProvider>
        </MemoryRouter>
      );
  
      // Use findBy queries to wait for elements to appear
      const game1 = await screen.findByText("The Wish Master");
      const game2 = await screen.findByText("Aliens");
  
      // Assertions
      expect(game1).toBeInTheDocument();
      expect(game2).toBeInTheDocument();
      
      // Check if loading indicator is removed after data fetch
      expect(screen.queryByText(/Loading.../)).not.toBeInTheDocument();
      expect(screen.queryByText(/Error:/)).not.toBeInTheDocument();
    });
  });
  

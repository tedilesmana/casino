import { renderHook } from "@testing-library/react-hooks";
import { useFetchGames } from "../core/hooks/useFetchGames";
import { useFetchJackpot } from "../core/hooks/useFetchJackpot";
import * as apiService from "../core/services/apiService";
import { act } from "react";

// Mock API functions
jest.mock("../core/services/apiService", () => ({
  fetchGames: jest.fn(),
  fetchJackpots: jest.fn(),
}));

describe("Custom Hooks", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock calls before each test
  });

  // Suppress specific console errors
  const suppressWarnings = () => {
    const originalError = console.error;
    jest.spyOn(console, "error").mockImplementation((message) => {
      if (
        typeof message === "string" &&
        (message.includes("ReactDOM.render is no longer supported") ||
          message.includes(
            "An update to %s inside a test was not wrapped in act(..."
          ))
      ) {
        return; // Suppress specific warnings
      }
      originalError(message); // Call original console.error for other messages
    });
  };

  afterEach(() => {
    (console.error as jest.Mock).mockRestore(); // Restore the original console.error
  });

  describe("useFetchGames", () => {
    it("should initialize with empty games, loading true, and error null", () => {
      suppressWarnings(); // Suppress warnings
      const { result } = renderHook(() => useFetchGames());

      expect(result.current.games).toEqual([]);
      expect(result.current.loading).toBe(true);
      expect(result.current.error).toBe(null);
    });

    it("should fetch games successfully", async () => {
      const mockData = [
        {
          categories: ["top", "slots", "new"],
          name: "The Wish Master",
          image:
            "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
          id: "NETHEWISHMASTER",
        },
        {
          categories: ["top", "slots", "new"],
          name: "Aliens",
          image: "//stage.whgstage.com/scontent/images/games/NEALIENS.jpg",
          id: "NEALIENS",
        },
      ];
      (apiService.fetchGames as jest.Mock).mockResolvedValueOnce(mockData);

      suppressWarnings(); // Suppress warnings
      const { result, waitForNextUpdate } = renderHook(() => useFetchGames());

      await act(async () => {
        await waitForNextUpdate(); // Wait for the state to update
      });

      expect(result.current.games).toEqual(mockData);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null);
    });

    it("should handle errors during games fetch", async () => {
      const mockError = new Error("Network error");
      (apiService.fetchGames as jest.Mock).mockRejectedValueOnce(mockError);

      suppressWarnings(); // Suppress warnings
      const { result, waitForNextUpdate } = renderHook(() => useFetchGames());

      await act(async () => {
        await waitForNextUpdate(); // Wait for the state to update
      });

      expect(result.current.games).toEqual([]);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(mockError.message);
    });
  });

  describe("useFetchJackpot", () => {
    it("should fetch jackpots successfully", async () => {
      const mockData = [
        {
          game: "NEJACKANDTHEBEANSTALK",
          amount: 43153,
        },
        {
          game: "LEPABLOPICASSOSLOT",
          amount: 20714,
        },
      ];
      (apiService.fetchJackpots as jest.Mock).mockResolvedValueOnce(mockData);

      suppressWarnings(); // Suppress warnings
      const { result, waitForNextUpdate } = renderHook(() => useFetchJackpot());

      await act(async () => {
        await waitForNextUpdate(); // Wait for the state to update
      });

      expect(result.current.jackpots).toEqual(mockData);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null);
    });

    it("should handle errors during jackpots fetch", async () => {
      const mockError = new Error("Network error");
      (apiService.fetchJackpots as jest.Mock).mockRejectedValueOnce(mockError);

      suppressWarnings(); // Suppress warnings
      const { result, waitForNextUpdate } = renderHook(() => useFetchJackpot());

      await act(async () => {
        await waitForNextUpdate(); // Wait for the state to update
      });

      expect(result.current.jackpots).toEqual([]);
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(mockError.message);
    });
  });
});

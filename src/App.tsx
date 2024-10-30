// src/App.tsx
import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom"; // Import React Router
import { GameRoutes } from "./routes/Routes"; // Import GameRoutes
import { theme } from "./styles/theme";
import { GameProvider } from "./redux/context/GameContext";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GameProvider>
          <GameRoutes /> {/* Use the GameRoutes component */}
        </GameProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;

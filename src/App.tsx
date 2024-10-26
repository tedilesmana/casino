// src/App.tsx
import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom"; // Import React Router
import AppRoutes from "./routes/Routes"; // Import AppRoutes
import { theme } from "./styles/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRoutes /> {/* Use the AppRoutes component */}
      </Router>
    </ThemeProvider>
  );
};

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AuthProvider } from "./context/auth-context";
import Login from "./components/UseContext/Login";
import Dashboard from "./components/UseContext/Dashboard";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import { App } from "./pages/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);

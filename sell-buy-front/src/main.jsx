import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/love-light";
import "@fontsource/love-light/400.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

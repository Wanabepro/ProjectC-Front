import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "shared/main.css";
import "shared/designSystem.css";
import App from "app";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

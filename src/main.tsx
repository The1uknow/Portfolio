// src/main.tsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// === i18n ===
import { initLang } from "./i18n";

// Перед монтированием приложения подгружаем язык из localStorage
initLang();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
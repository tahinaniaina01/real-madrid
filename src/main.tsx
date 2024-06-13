import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import CartsProvider from "./contexts/CartsContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartsProvider>
        <App />
      </CartsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

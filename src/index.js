import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import "./main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <main>
      <Home />
    </main>
  </React.StrictMode>
);

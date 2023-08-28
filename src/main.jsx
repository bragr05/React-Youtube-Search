import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { YoutubeVideoContextProvider } from "./context/YoutubeVideoContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <YoutubeVideoContextProvider>
      <App />
    </YoutubeVideoContextProvider>
  </React.StrictMode>
);

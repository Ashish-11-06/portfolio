import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client for React 18
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppWrapper from "./App";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a root using createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

// Measuring performance
reportWebVitals();

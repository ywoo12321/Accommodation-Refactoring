import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { Container } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container component="main" maxWidth="xl">
    <App />
  </Container>,
);

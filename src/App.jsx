import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import MainExchange from "./components/MainExchange";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/themes";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainExchange />} />
          <Route path="calc" element={<h2>Hello</h2>} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

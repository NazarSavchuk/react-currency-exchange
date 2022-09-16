import React from "react";
import Header from "./components/Header";
import MainExchange from "./components/MainExchange";
import "./App.css";
import { ThemeProvider, Container } from "@mui/material";
import { theme } from "./components/themes";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <MainExchange />
      </ThemeProvider>
      <Container
        maxWidth="lg"
        sx={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
        }}>
        <div className="social-links">
          <a
            className="social-link"
            href="https://github.com/NazarSavchuk"
            target="_blank"
            rel="noreferrer">
            <GitHubIcon />
          </a>
          <a
            className="social-link"
            href="https://www.instagram.com/_nazar_savchuk_/"
            target="_blank"
            rel="noreferrer">
            <InstagramIcon />
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/nazar-savchuk-66b3ba1bb/"
            target="_blank"
            rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a
            className="social-link"
            href="https://react-portfolio-chi-two.vercel.app/"
            target="_blank"
            rel="noreferrer">
            <LinkIcon />
          </a>
        </div>
      </Container>
    </div>
  );
}

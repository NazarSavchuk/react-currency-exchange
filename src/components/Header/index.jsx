import React from "react";
import { AppBar, Container, Typography } from "@mui/material";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <AppBar position="static" sx={{ padding: "0.7rem 0" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ color: "#eceff1", letterSpacing: ".1rem" }}>
            Currency Exchange
          </Typography>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;

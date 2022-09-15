import React from "react";
import { AppBar, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <Typography
              variant="h5"
              component="h1"
              sx={{ color: "#eceff1", letterSpacing: ".1rem" }}>
              Currency Exchange
            </Typography>
          </Link>
          <div className="header-links">
            <Link to="/">
              <Button
                color="neutral"
                variant="contained"
                sx={{ padding: "0.7rem 2rem", marginLeft: "2rem" }}>
                MAIN
              </Button>
            </Link>
            <Link to="/calc">
              <Button
                color="neutral"
                variant="contained"
                sx={{ padding: "0.7rem 2rem" }}>
                CALC
              </Button>
            </Link>
          </div>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;

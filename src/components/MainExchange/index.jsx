import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import axios from "axios";
import "./MainExchange.scss";
import { Container, Box, TextField, Button } from "@mui/material";

const MainExchange = () => {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pln");
  const [input, setInput] = useState(0);
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
      )
      .then((res) => {
        setInfo(res.data[from]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [from]);

  useEffect(() => {
    setOptions(["uah", "usd", "eur", "pln"].concat(Object.keys(info)));
    convert();
  }, [info]);

  const convert = () => {
    setOutput((input * info[to]).toFixed(2));
  };

  const flip = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <TextField
            id="outlined-basic"
            label="Enter Your Amount"
            variant="outlined"
            type="number"
            onChange={(e) => setInput(e.target.value)}
          />
          <Dropdown
            className="dropdown-main"
            options={options}
            onChange={(e) => {
              setFrom(e.value);
            }}
            value={from}
            placeholder="From"
          />

          <svg
            width="36px"
            height="36px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={flip}
            className="flip-currency">
            <g data-name="Layer 2">
              <g data-name="flip-2">
                <rect
                  width="24"
                  height="24"
                  transform="rotate(180 12 12)"
                  opacity="0"
                />
                <path d="M6.09 19h12l-1.3 1.29a1 1 0 0 0 1.42 1.42l3-3a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.42l1.3 1.29h-12a1.56 1.56 0 0 1-1.59-1.53V13a1 1 0 0 0-2 0v2.47A3.56 3.56 0 0 0 6.09 19z" />
                <path d="M5.79 9.71a1 1 0 1 0 1.42-1.42L5.91 7h12a1.56 1.56 0 0 1 1.59 1.53V11a1 1 0 0 0 2 0V8.53A3.56 3.56 0 0 0 17.91 5h-12l1.3-1.29a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.42z" />
              </g>
            </g>
          </svg>
          <Dropdown
            className="dropdown-main"
            options={options}
            onChange={(e) => {
              setTo(e.value);
            }}
            value={to}
            placeholder="From"
          />
          <Button
            onClick={convert}
            color="neutral"
            variant="contained"
            sx={{ padding: "0.4rem 2rem", height: "56px" }}>
            Convert
          </Button>
          <TextField
            id="outlined-basic"
            label="Result"
            variant="outlined"
            value={output}
            type="number"
          />
        </Box>
      </Container>
    </div>
  );
};

export default MainExchange;

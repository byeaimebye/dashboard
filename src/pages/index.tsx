import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import Dashboard from "./dashboard";
import React, { useState } from "react";

interface ButtonData {
  label: string;
  content: React.ReactNode;
}

export default function Home() {
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const buttonData: ButtonData[] = [
    { label: "Dashboard", content: <Dashboard /> },
    { label: "Clientes", content: <Dashboard /> },
    { label: "Reglas de acumulacion", content: <Dashboard /> },
  ];

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", flexWrap: "wrap" }}
      >
        <Box
          sx={{
            display: "flex",
            width: "30%",
            padding: "10px",
            margin: "0 auto",
            height: "44px",
            flexWrap: "wrap",
          }}
        >
          {buttonData.map((button, index) => (
            <Button
              key={index}
              onClick={() => handleButtonClick(index)}
              variant="contained"
              disabled={button.label !== "Dashboard"}
              sx={{
                width: "min-content",
                whiteSpace: "noWrap",
                backgroundColor:
                  selectedButton === index ? "your-selected-color" : "#FFF",
                color:
                  selectedButton === index ? "#FFF" : "your-unselected-color", // Cambia 'your-unselected-color' al color deseado
              }}
            >
              {button.label}
            </Button>
          ))}
        </Box>
      </AppBar>
      <Container>{buttonData[selectedButton].content}</Container>
    </>
  );
}

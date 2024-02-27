import React, { useEffect, useState } from "react";
import "./TopBar.css";
import { Container } from "react-bootstrap";
import { Box, IconButton, Stack, useTheme } from "@mui/material";
import {
  DarkModeRounded,
  KeyboardArrowUpRounded,
  LightModeRounded,
  MenuRounded,
} from "@mui/icons-material";
import { getDesignTokens } from "../../theme";

export default function TopBar({ setMode }) {
  const handleChangeMode = (_) => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);
  const [openList, setOpenList] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // تنظيف المستمع عندما يتم تفريغ المكون
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const themeSystem = getDesignTokens(theme.palette.mode);

  return (
    <div
      className="top-bar"
      style={{
        background: isScrolled
          ? themeSystem.palette.background.primary
          : "none",
        boxShadow: isScrolled ? "0 0 .4rem #954008" : "none",
      }}
    >
      <Container className="container1">
        <Stack direction={"row"} alignItems={"center"}>
          <a
            href="#"
            className="fw-bold"
            style={{
              letterSpacing: 0.1 + "rem",
              color: "#954008",
            }}
          >
            Portfolio
          </a>

          <Box flexGrow={1} />

          <Stack
            direction={"row"}
            gap={2}
            className="routes"
            alignItems={"center"}
          >
            <a
              href="#home"
              style={{
                color: theme.palette.text.primary,
                fontSize: 1.1 + "rem",
              }}
            >
              Home
            </a>

            <a
              href="#about"
              style={{
                color: theme.palette.text.primary,
                fontSize: 1.1 + "rem",
              }}
            >
              About
            </a>

            <a
              href="#projects"
              style={{
                color: theme.palette.text.primary,
                fontSize: 1.1 + "rem",
              }}
            >
              Projects
            </a>

            <a
              href="#contact"
              style={{
                color: theme.palette.text.primary,
                fontSize: 1.1 + "rem",
              }}
            >
              Contact
            </a>

            <Box>
              <IconButton color="inherit" onClick={handleChangeMode}>
                {theme.palette.mode === "dark" ? (
                  <DarkModeRounded />
                ) : (
                  <LightModeRounded />
                )}
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Container>

      <Container
        className="container2"
        style={{ background: themeSystem.palette.background.primary }}
      >
        <Stack
          className="inner-container2"
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <IconButton
              color="inherit"
              onClick={(_) =>
                setOpenList((prev) => (prev === true ? false : true))
              }
            >
              <MenuRounded />
            </IconButton>
          </Box>

          <a
            href="#"
            className="fw-bold"
            style={{
              letterSpacing: 0.1 + "rem",
              color: "#954008",
            }}
          >
            Portfolio
          </a>

          <Box>
            <IconButton color="inherit" onClick={handleChangeMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeRounded />
              ) : (
                <LightModeRounded />
              )}
            </IconButton>
          </Box>
        </Stack>
      </Container>

      <div
        className={`overListMenu ${openList ? "active" : ""}`}
        style={{ background: themeSystem.palette.background.primary }}
      >
        <ul className="list-unstyled m-0 d-flex gap-3 flex-column">
          <li>
            <a
              href="#home"
              style={{
                fontSize: 1.1 + "rem",
              }}
              onClick={(_) =>
                setOpenList((prev) => (prev === true ? false : true))
              }
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              style={{
                fontSize: 1.1 + "rem",
              }}
              onClick={(_) =>
                setOpenList((prev) => (prev === true ? false : true))
              }
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              style={{
                fontSize: 1.1 + "rem",
              }}
              onClick={(_) =>
                setOpenList((prev) => (prev === true ? false : true))
              }
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              style={{
                fontSize: 1.1 + "rem",
              }}
              onClick={(_) =>
                setOpenList((prev) => (prev === true ? false : true))
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

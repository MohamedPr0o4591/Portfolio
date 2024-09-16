import { GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import "./Footer.css";
import { IconButton } from "@mui/material";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/MohamedPr0o4591" target="_blank">
            <IconButton color="inherit">
              <GitHub sx={{ fontSize: "3rem" }} />
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-mokhtar-245927277/"
            target="_blank"
          >
            <IconButton color="inherit">
              <LinkedIn sx={{ fontSize: "3rem" }} />
            </IconButton>
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2023 Mohamed Mokhtar. All rights reserved.</p>
      </div>
    </footer>
  );
}

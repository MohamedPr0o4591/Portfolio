import React, { useState } from "react";
import "./NavBar.css";
import { IconButton } from "@mui/material";
import { Close, Segment } from "@mui/icons-material";

function NavBar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`header ${location.pathname.includes("/admin") && "d-none"}`}
    >
      <a href="#" className="logo">
        Mohamed <span>Mokhtar</span>
      </a>

      <nav className={`navbar`}>
        <ul>
          <li>
            <a
              href="#home"
              className={props.activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={props.activeSection === "about" ? "active" : ""}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={props.activeSection === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={props.activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <IconButton
        className="menu-btn"
        color="inherit"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        sx={{ zIndex: 1 }}
      >
        {isMenuOpen ? (
          <Close sx={{ fontSize: "3rem" }} />
        ) : (
          <Segment sx={{ fontSize: "3rem" }} />
        )}
      </IconButton>

      {/* Slide Menu */}

      <nav
        className="navbar slide-menu"
        style={{
          height: isMenuOpen ? "50rem" : 0,
        }}
      >
        <ul>
          <li>
            <a
              href="#home"
              className={props.activeSection === "home" ? "active" : ""}
              onClick={(_) => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={props.activeSection === "about" ? "active" : ""}
              onClick={(_) => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={props.activeSection === "projects" ? "active" : ""}
              onClick={(_) => setIsMenuOpen(false)}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={props.activeSection === "contact" ? "active" : ""}
              onClick={(_) => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

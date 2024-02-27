import React, { useEffect, useRef, useState } from "react";
import "./HomeComponent.css";
import { Col, Row } from "react-bootstrap";
import { Box, Button, IconButton, Stack } from "@mui/material";
import {
  ArrowUpwardRounded,
  FacebookOutlined,
  GitHub,
  Instagram,
  KeyboardArrowUpRounded,
  LinkedIn,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";
import download from "downloadjs";
import CV from "../../assets/cv.pdf";
import img from "../../../public/img.jpg";

export default function HomeComponent() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  const handleTopClicked = (_) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-component" id="home">
      {isScrolled ? (
        <Box
          sx={{
            position: "fixed",
            bottom: 10 + "px",
            right: 10 + "px",
            zIndex: 2,
          }}
        >
          <IconButton color="inherit" onClick={handleTopClicked}>
            <KeyboardArrowUpRounded
              sx={{
                background: "#954008",
                borderRadius: 50 + "%",
                width: 42 + "px",
                height: 42 + "px",
              }}
            />
          </IconButton>
        </Box>
      ) : null}

      <Row className="w-100">
        <Col
          sm={12}
          lg={6}
          className="d-flex justify-content-end align-items-center"
        >
          <Stack gap={2}>
            <Box className="first-side">
              <h4>Hello ,im</h4>
              <h2>Mohamed Mokhtar</h2>

              <span>
                Junior Front End Developer| HTML, CSS, JavaScript Passionate
                about Creating Engaging Web Experience
              </span>
            </Box>

            <Stack gap={1}>
              <ul className="list-unstyled d-flex gap-3 flex-wrap">
                <li>
                  <a
                    href="https://www.facebook.com/lmohamedmokhtarl"
                    target="_blank"
                    className="box-icons"
                  >
                    <FacebookOutlined />
                  </a>
                </li>

                <li>
                  <a
                    href="https://wa.me/+201022585956"
                    target="_blank"
                    className="box-icons"
                  >
                    <WhatsApp />
                  </a>
                </li>

                <li>
                  <a
                    href="https://t.me/mohamedpr0o459"
                    target="_blank"
                    className="box-icons"
                  >
                    <Telegram />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/mohamedpr0o459/"
                    target="_blank"
                    className="box-icons"
                  >
                    <Instagram />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/mohamed-mokhtar-245927277"
                    target="_blank"
                    className="box-icons"
                  >
                    <LinkedIn />
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/MohamedPr0o4591"
                    target="_blank"
                    className="box-icons"
                  >
                    <GitHub />
                  </a>
                </li>
              </ul>

              <Box>
                <a
                  href={CV}
                  download={"CV.pdf"}
                  className="text-decoration-none text-light"
                >
                  <Button
                    sx={{
                      background: "#954008",
                      color: "inherit",
                      p: "10px 40px",
                      boxShadow: "0 0 .4rem #954008",
                    }}
                  >
                    Download CV
                  </Button>
                </a>
              </Box>
            </Stack>
          </Stack>
        </Col>
        <Col sm={12} lg={6} className="d-flex justify-content-center mt-2">
          <Box className="second-side">
            <div className="box-image position-relative overflow-hidden">
              <img src={img} alt="Image" className="w-100" />
              <strong className="inner">WEB DEVELOPER</strong>
            </div>

            <span style={{ "--i": 0 }} />
            <span style={{ "--i": 1 }} />
            <span style={{ "--i": 2 }} />
            <span style={{ "--i": 3 }} />
            <span style={{ "--i": 4 }} />
            <span style={{ "--i": 5 }} />
            <span style={{ "--i": 6 }} />
            <span style={{ "--i": 7 }} />
            <span style={{ "--i": 8 }} />
            <span style={{ "--i": 9 }} />

            <span style={{ "--i": 10 }} />
            <span style={{ "--i": 11 }} />
            <span style={{ "--i": 12 }} />
            <span style={{ "--i": 13 }} />
            <span style={{ "--i": 14 }} />
            <span style={{ "--i": 15 }} />
            <span style={{ "--i": 16 }} />
            <span style={{ "--i": 17 }} />
            <span style={{ "--i": 18 }} />
            <span style={{ "--i": 19 }} />

            <span style={{ "--i": 20 }} />
            <span style={{ "--i": 21 }} />
            <span style={{ "--i": 22 }} />
            <span style={{ "--i": 23 }} />
            <span style={{ "--i": 24 }} />
            <span style={{ "--i": 25 }} />
            <span style={{ "--i": 26 }} />
            <span style={{ "--i": 27 }} />
            <span style={{ "--i": 28 }} />
            <span style={{ "--i": 29 }} />

            <span style={{ "--i": 30 }} />
            <span style={{ "--i": 31 }} />
            <span style={{ "--i": 32 }} />
            <span style={{ "--i": 33 }} />
            <span style={{ "--i": 34 }} />
            <span style={{ "--i": 35 }} />
            <span style={{ "--i": 36 }} />
            <span style={{ "--i": 37 }} />
            <span style={{ "--i": 38 }} />
            <span style={{ "--i": 39 }} />

            <span style={{ "--i": 40 }} />
            <span style={{ "--i": 41 }} />
            <span style={{ "--i": 42 }} />
            <span style={{ "--i": 43 }} />
            <span style={{ "--i": 44 }} />
            <span style={{ "--i": 45 }} />
            <span style={{ "--i": 46 }} />
            <span style={{ "--i": 47 }} />
            <span style={{ "--i": 48 }} />
            <span style={{ "--i": 49 }} />
          </Box>
        </Col>
      </Row>
    </div>
  );
}

import React from "react";
import "./AboutComponent.css";
import { Col, Row } from "react-bootstrap";
import { Box, Button, Stack } from "@mui/material";
import img from "../../../public/img2.png";
import SectionTitle from "../SectionTitle";
import CV from "../../assets/cv.pdf";
import { frameWorks, languages } from "./../../data";

export default function AboutComponent({ sectionsRef }) {
  return (
    <div className="about-component" id="about" ref={el => sectionsRef.current.about = el}>
      <Row className="w-100">
        <Col sm={12} lg={6} className="column ">
          <Box className="box-img">
            <img src={img} alt="Image" />
          </Box>
        </Col>

        <Col sm={12} lg={6} className="column align-items-center">
          <Stack gap={3}>
            <SectionTitle title1="About" title2="Me" />

            <Stack gap={2}>
              <Box>
                <h2>Hello ,i'm here to explain my Profile in a better way</h2>
                <ul>
                  <li>
                    My strengths are that I accomplish my tasks perfectly and
                    that I can solve any problem as quickly as possible.
                  </li>
                  <li>
                    The goal in my life is to be a Front-end developer and
                    expert
                  </li>
                  <li>
                    <span>Interests :-</span>
                    <ol>
                      <li>
                        I am an experienced programmer with experience in
                        developing web
                      </li>
                      <li>
                        <span>
                          I have experience in some programming languages such
                          as:
                        </span>
                        <ul
                          className="d-flex  gap-3 my-3 list-unstyled flex-wrap"
                          style={{ pointerEvents: "none" }}
                        >
                          {languages.map((language, index) => {
                            return (
                              <li key={index} className="listOfLanguages">
                                <span>{language.name}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                      <li>
                        <span>
                          Frameworks:
                          <ul
                            className="d-flex  gap-3 my-3 list-unstyled flex-wrap"
                            style={{ pointerEvents: "none" }}
                          >
                            {frameWorks.map((frameWork, index) => {
                              return (
                                <li key={index} className="listOfLanguages">
                                  <span>{frameWork.name}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </span>
                      </li>
                      <li>
                        <span>
                          I am committed to providing high quality work and
                          meeting deadlines
                        </span>
                      </li>
                    </ol>
                  </li>
                  <li>
                    <span>Hobbies :-</span>
                    <ul>
                      <li>Learn new programming languages</li>
                      <li>Developing websites or special software projects</li>
                      <li>
                        Reading and following the latest technologies and tools
                        used in the field of programming
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Skills :-</span>
                    <ol>
                      <li>Typing quickly on the keyboard</li>
                      <li>
                        <span>Easily detect and solve errors</span>
                      </li>
                      <li>
                        <span>Create projects with clean codes</span>
                      </li>
                    </ol>
                  </li>
                </ul>
              </Box>
              <Box>
                <Button
                  sx={{
                    background: "var(--main-color)",
                    color: "inherit",
                    p: "10px 40px",
                    boxShadow: "0 0 .4rem var(--main-color)",
                  }}
                >
                  <a
                    href={CV}
                    download={"CV.pdf"}
                    className="text-decoration-none text-light"
                  >
                    Download CV
                  </a>
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Col>
      </Row>
    </div>
  );
}

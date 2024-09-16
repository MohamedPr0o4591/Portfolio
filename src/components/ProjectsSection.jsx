import React, { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";
import HeadLine from "./HeadLine";
import { webProjects } from "../../data";
import img from "../assets/design/admin-dashboard.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton } from "@mui/material";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  ArrowOutward,
  GitHub,
} from "@mui/icons-material";

export default function ProjectsSection(props) {
  const sliderRef = useRef(null);

  const goToNext = useCallback(() => {
    if (sliderRef.current) sliderRef.current.slickNext();
  }, []);

  const goToPrev = useCallback(() => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  }, []);

  const fadeSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
  };

  return (
    <section
      className="projects-section"
      id="projects"
      ref={(el) => (props.sectionRefs.current.projects = el)}
    >
      <HeadLine title="Latest" subTitle="Projects" />

      <strong className="projects-count">
        Web Projects ({webProjects.length})
      </strong>

      <Slider ref={sliderRef} {...fadeSettings}>
        {webProjects.map((project) => {
          return (
            <div className="projects-container" key={project.id}>
              <div className="project-content">
                <span className="handjet-400">
                  {project.id < 10 ? `0${project.id}` : project.id}
                </span>

                <h3>{project.category}</h3>

                <h4>{project.title}</h4>

                <p>{project.desc}</p>

                <div className="project-usage">
                  <ul>
                    {project.usage?.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>

                <div className="project-links">
                  <a href={project.link} target="_blank">
                    <IconButton color="inherit">
                      <ArrowOutward sx={{ fontSize: "3rem" }} />
                    </IconButton>
                  </a>

                  <a href={project.github} target="_blank">
                    <IconButton color="inherit">
                      <GitHub sx={{ fontSize: "3rem" }} />
                    </IconButton>
                  </a>
                </div>
              </div>

              <div className="project-img-box">
                <img src={project.img} alt={project.title} />

                <div className="project-controls">
                  <IconButton
                    color="inherit"
                    className="project-control-btn"
                    onClick={goToPrev}
                  >
                    <ArrowBackIosNew
                      sx={{ fontSize: "2rem" }}
                      color="inherit"
                    />
                  </IconButton>

                  <IconButton
                    color="inherit"
                    className="project-control-btn"
                    onClick={goToNext}
                  >
                    <ArrowForwardIos
                      sx={{ fontSize: "2rem" }}
                      color="inherit"
                    />
                  </IconButton>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

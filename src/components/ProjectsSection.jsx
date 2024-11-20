import React, { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";
import HeadLine from "./HeadLine";
import { webProjects } from "../../Data";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton } from "@mui/material";
import {
  ArrowBackIosNew,
  ArrowForwardIos,
  ArrowOutward,
  GitHub,
  PlayArrow,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../redux/actions/allActions";

export default function ProjectsSection(props) {
  const allProjects = useSelector((state) => state.GET_PROJECTS.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  }, []);

  const sliderRef = useRef(null);

  const goToNext = useCallback(() => {
    if (sliderRef.current) sliderRef.current.slickNext();
  }, []);

  const goToPrev = useCallback(() => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  }, []);

  const [projectVideo, setProjectVideo] = useState("");

  const fadeSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    pauseOnFocus: false,
  };

  return (
    <section
      className="projects-section"
      id="projects"
      ref={(el) => (props.sectionRefs.current.projects = el)}
    >
      <HeadLine title="Latest" subTitle="Projects" />

      <strong className="projects-count">
        Web Projects ({allProjects.length})
      </strong>

      <Slider ref={sliderRef} {...fadeSettings}>
        {allProjects.map((project, index) => {
          return (
            <div className="projects-container" key={index}>
              <div className="project-content">
                <span className="handjet-400">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>

                <h3>{project.p_title}</h3>

                <h4>{project.p_subTitle}</h4>

                <p>{project.p_desc}</p>

                <div className="project-usage">
                  <ul>
                    {project.p_types.p_type?.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>

                <div className="project-links">
                  <a href={project.p_linkWeb} target="_blank">
                    <IconButton color="inherit">
                      <ArrowOutward sx={{ fontSize: "3rem" }} />
                    </IconButton>
                  </a>

                  <a href={project.p_linkGithub} target="_blank">
                    <IconButton color="inherit">
                      <GitHub sx={{ fontSize: "3rem" }} />
                    </IconButton>
                  </a>

                  {project.p_linkVideo && (
                    <a
                      href="#project-video"
                      onClick={() => setProjectVideo(project.p_linkVideo)}
                    >
                      <IconButton color="inherit">
                        <PlayArrow sx={{ fontSize: "3rem" }} />
                      </IconButton>
                    </a>
                  )}
                </div>
              </div>

              <div className="project-img-box">
                <img
                  src={`${import.meta.env.VITE_HOST}portfolioAdmin/upload/${
                    project.p_img
                  }`}
                  alt={project.p_title}
                />

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

      {projectVideo && (
        <div className="video-container" id="project-video">
          <iframe
            src={projectVideo}
            height="803"
            width="100%"
            frameBorder="0"
            allowFullScreen=""
            title="منشور مضمن"
          ></iframe>
        </div>
      )}
    </section>
  );
}

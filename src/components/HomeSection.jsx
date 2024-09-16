import React from "react";
import "./styles.css";
import { homeImg, socialMedia } from "../../Data";
import cdFile from "../assets/cv.pdf";

export default function HomeSection(props) {
  return (
    <section
      className="home-section"
      id="home"
      ref={(el) => (props.sectionRefs.current.home = el)}
    >
      <div className="content">
        <h1>
          Hi, It's <span>Mohamed</span>
        </h1>
        <h3>
          I'm a <span>Front End Developer</span>
        </h3>
        <p>
          Senior Front End Developer | HTML ,CSS ,JavaScript ,PHP Passionate
          about Creating Engaging Web Experience
        </p>

        <div className="social-media">
          <ul>
            {socialMedia?.map((social) => {
              return (
                <li key={social.id}>
                  <a href={social.link} target="_blank">
                    {social.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="group-buttons">
          <a href={cdFile} download={"cv.pdf"} className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="home-img">
        <div className="img-box">
          {Array.from({ length: 50 }, (_, i) => (
            <span key={i} style={{ "--i": i }} />
          ))}
          <img src={homeImg} alt="Eng. Mohamed Mokhtar" />
        </div>
      </div>
    </section>
  );
}

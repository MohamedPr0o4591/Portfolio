import React from "react";
import "./styles.css";
import profileImg from "../assets/img2.png";
import HeadLine from "./HeadLine";
import { about_hobbies, about_interests, about_skills } from "../../data";

export default function AboutSection(props) {
  return (
    <section
      className="about-section"
      id="about"
      ref={(el) => (props.sectionRefs.current.about = el)}
    >
      <div className="img-box">
        <div className="circle">
          <img src={profileImg} alt="Eng. Mohamed Mokhtar" />
        </div>
      </div>
      <div className="content">
        <HeadLine title="About" subTitle="Me" />

        <h3>Hello ,i'm here to explain my Profile in a better way</h3>
        <div className="inner-container">
          <div className="timeline-items">
            <span>
              My strengths are that I accomplish my tasks perfectly and that I
              can solve any problem as quickly as possible.
            </span>

            <span>
              The goal in my life is to be a Front-end developer and expert
            </span>

            <span>Interests :-</span>

            {about_interests.map((item) => {
              return (
                <div className="timeline-item" key={item.id}>
                  <div className="timeline-dot" />

                  <div className="timeline-number">{item.id}</div>

                  <div className="timeline-content">
                    <p>{item.desc}</p>

                    {item.skills && (
                      <ul>
                        {item.skills.map((skill) => {
                          return <li key={skill.id}>{skill.skill}</li>;
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}

            <span>Hobbies :-</span>

            {about_hobbies.map((hobby) => {
              return (
                <div className="timeline-item" key={hobby.id}>
                  <div className="timeline-dot" />

                  <div className="timeline-number">{hobby.id}</div>

                  <div className="timeline-content">
                    <p>{hobby.hobby}</p>
                  </div>
                </div>
              );
            })}

            <span>Skills :-</span>

            {about_skills.map((skill) => {
              return (
                <div className="timeline-item" key={skill.id}>
                  <div className="timeline-dot" />

                  <div className="timeline-number">{skill.id}</div>

                  <div className="timeline-content">
                    <p>{skill.skill}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

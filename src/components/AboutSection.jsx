import React, { useEffect } from "react";
import "./styles.css";
import HeadLine from "./HeadLine";
import { about_hobbies, about_interests, about_skills } from "../../Data";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAboutManagerData,
  getAllInfoData,
} from "../redux/actions/allActions";

export default function AboutSection(props) {
  const data = useSelector((state) => state.ABOUT_MANAGER_DATA.result);
  const photo = useSelector((state) => state.GET_ALL_INFO_DATA.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAboutManagerData());
    dispatch(getAllInfoData());
  }, []);

  return (
    <section
      className="about-section"
      id="about"
      ref={(el) => (props.sectionRefs.current.about = el)}
    >
      <div className="img-box">
        <div className="circle">
          <img
            // src="./src/assets/img2.png"
            src={`${import.meta.env.VITE_HOST}/portfolioAdmin/upload${photo.sub_img}`}
            alt="Eng. Mohamed Mokhtar"
          />
        </div>
      </div>
      <div className="content">
        <HeadLine title="About" subTitle="Me" />

        <h3>{data.sub1 || `I'm here to explain my Profile in a better way`}</h3>
        <div className="inner-container">
          <div className="timeline-items">
            <span>{data.sub2 || "I'm a Full Stack Web Developer."}</span>

            <span>{data.sub3 || "I'm looking for a job as a Full Stack Web Developer."}</span>

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

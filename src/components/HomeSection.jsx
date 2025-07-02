import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllInfoData } from "../redux/actions/allActions";
import {
  FacebookSharp,
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";

export default function HomeSection(props) {
  const allData = useSelector((state) => state.GET_ALL_INFO_DATA.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInfoData());
  }, []);

  return (
    <section
      className="home-section"
      id="home"
      ref={(el) => (props.sectionRefs.current.home = el)}
    >
      <div className="content">
        <h1>
          Hi, It's <span>{allData.title || "Mohamed Mokhtar"}</span>
        </h1>
        <h3>
          I'm a <span>{allData.sub_title || "Full Stack developer"}</span>
        </h3>
        <p>{allData.description || "Full Stack Developer with expertise in React, React Native, PHP, and modern web technologies.Passionate about designing and implementing efficient and scalable web solutions, ensuringseamless user experiences."}</p>

        <div className="social-media">
          <ul>
            <li>
              <a href={allData.fb} target="_blank">
                <FacebookSharp sx={{ fontSize: 2.5 + "rem" }} />
              </a>
            </li>

            <li>
              <a href={allData.wb} target="_blank">
                <WhatsApp sx={{ fontSize: 2.5 + "rem" }} />
              </a>
            </li>

            <li>
              <a href={allData.tele} target="_blank">
                <Telegram sx={{ fontSize: 2.5 + "rem" }} />
              </a>
            </li>

            <li>
              <a href={allData.insta} target="_blank">
                <Instagram sx={{ fontSize: 2.5 + "rem" }} />
              </a>
            </li>

            <li>
              <a href={allData.linkedIn} target="_blank">
                <LinkedIn sx={{ fontSize: 2.5 + "rem" }} />
              </a>
            </li>

            <li>
              <a href={allData.github} target="_blank">
                <GitHub sx={{ fontSize: 2.5 + "rem" }} />
              </a>
            </li>
          </ul>
        </div>

        <div className="group-buttons">
          <a
            href={`${import.meta.env.VITE_HOST}/portfolioAdmin/upload${allData.cv
              }`}
            target="_blank"
            download={"cv.pdf"}
            className="btn"
          >
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
          <img
            // src="../src/assets/mohamed.jpg"
            src={`${import.meta.env.VITE_HOST}/portfolioAdmin/upload${allData.img}`}
            alt="Eng. Mohamed Mokhtar"
            title="Eng. Mohamed Mokhtar"
          />
        </div>
      </div>
    </section>
  );
}

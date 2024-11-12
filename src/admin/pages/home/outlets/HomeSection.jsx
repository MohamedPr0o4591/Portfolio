import React, { useState } from "react";
import "./HomeSection.css";
import { Container } from "@mui/material";

export default function HomeSection() {
  const initialData = {
    title: "",
    subTitle: "",
    desc: "",
    img: "",
    pdf: "",
    imgReader: "",
    pdfReader: "",
    fb: "",
    wb: "",
    tg: "",
    instagram: "",
    linkedin: "",
    github: "",
  };
  const [dataInfo, setDataInfo] = useState(initialData);

  const handleUploadImg = (e) => {
    const file = e.target.files[0];

    // for img reader
    const reader = new FileReader();

    reader.onload = (_) => {
      setDataInfo({ ...dataInfo, img: file, imgReader: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const handleUploadPDF = (e) => {
    const file = e.target.files[0];
    setDataInfo({ ...dataInfo, pdf: file });

    // how can i read pdf to iframe

    const reader = new FileReader();

    reader.onload = (_) => {
      setDataInfo({ ...dataInfo, pdfReader: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="home-section-outlet">
      <p className="heading">/Dashboard</p>
      <h3>/Dashboard</h3>

      <Container>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) =>
              setDataInfo({ ...dataInfo, title: e.target.value })
            }
            value={dataInfo.title}
          />
          <input
            type="text"
            placeholder="Sub Title"
            onChange={(e) =>
              setDataInfo({ ...dataInfo, subTitle: e.target.value })
            }
            value={dataInfo.subTitle}
          />

          <textarea
            placeholder="Description"
            rows="4"
            cols="50"
            onChange={(e) => setDataInfo({ ...dataInfo, desc: e.target.value })}
            value={dataInfo.desc}
          ></textarea>

          <div className="files-container">
            <div className="img-box">
              <label htmlFor="image">Upload Image</label>

              <input type="file" id="image" onChange={handleUploadImg} />
              <img src={dataInfo.imgReader} alt="Img" />
            </div>

            <div className="img-box">
              <label htmlFor="pdf">Upload PDF</label>

              <input type="file" id="pdf" onChange={handleUploadPDF} />
              <iframe
                src={dataInfo.pdfReader}
                frameborder="0"
                width={"100%"}
                height={"300px"}
              ></iframe>
            </div>
          </div>

          <div className="socialMedia">
            <input
              type="text"
              placeholder="facebook"
              onChange={(e) => setDataInfo({ ...dataInfo, fb: e.target.value })}
              value={dataInfo.fb}
            />

            <input
              type="text"
              placeholder="whatsapp"
              onChange={(e) => setDataInfo({ ...dataInfo, wb: e.target.value })}
              value={dataInfo.wb}
            />

            <input
              type="text"
              placeholder="telegram"
              onChange={(e) => setDataInfo({ ...dataInfo, tg: e.target.value })}
              value={dataInfo.tg}
            />

            <input
              type="text"
              placeholder="instagram"
              onChange={(e) =>
                setDataInfo({ ...dataInfo, instagram: e.target.value })
              }
              value={dataInfo.instagram}
            />

            <input
              type="text"
              placeholder="linkedin"
              onChange={(e) =>
                setDataInfo({ ...dataInfo, linkedin: e.target.value })
              }
              value={dataInfo.linkedin}
            />

            <input
              type="text"
              placeholder="github"
              onChange={(e) =>
                setDataInfo({ ...dataInfo, github: e.target.value })
              }
              value={dataInfo.github}
            />
          </div>

          <input type="submit" value={"Submit"} />
        </form>
      </Container>
    </div>
  );
}

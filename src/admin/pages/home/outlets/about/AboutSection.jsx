import React, { useEffect, useState } from "react";
import "./AboutSection.css";
import { Container } from "@mui/material";
import axios from "axios";

export default function AboutSection() {
  const initialState = {
    sub1: "",
    sub2: "",
    sub3: "",
    imgReader: "",
  };

  const [dataInfo, setDataInfo] = useState(initialState);
  const [imgFile, setImgFile] = useState(null);

  function handleUploadImg(e) {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = (_) => {
      setDataInfo({ ...dataInfo, imgReader: reader.result });
      setImgFile(file);
    };

    reader.readAsDataURL(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let flag;

    if (
      dataInfo.sub1 !== "" ||
      dataInfo.sub2 !== "" ||
      dataInfo.sub3 !== "" ||
      imgFile != null
    ) {
      flag = true;
    } else flag = false;

    if (flag) {
      const formData = new URLSearchParams();
      const formData2 = new FormData();

      if (dataInfo.sub1 != "") {
        formData.append("sub1", dataInfo.sub1);
      }

      if (dataInfo.sub2 != "") {
        formData.append("sub2", dataInfo.sub2);
      }

      if (dataInfo.sub3 != "") {
        formData.append("sub3", dataInfo.sub3);
      }

      if (imgFile != null) {
        formData2.append("sub_img", imgFile);
      }

      let err;

      if (
        dataInfo.sub1 !== "" ||
        dataInfo.sub2 !== "" ||
        dataInfo.sub3 !== ""
      ) {
        try {
          await axios.post(
            `${
              import.meta.env.VITE_HOST
            }portfolioAdmin/about_manager/upload.php`,
            formData,
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          err = false;
        } catch (error) {
          err = true;
        }
      }

      if (imgFile != null) {
        try {
          await axios.post(
            `${
              import.meta.env.VITE_HOST
            }portfolioAdmin/upload_info/upload_info.php`,
            formData2
          );

          err = false;
        } catch (error) {
          err = true;
        }
      }

      if (err) {
        alert("Something went wrong");
      } else {
        alert("Data uploaded successfully");
        setDataInfo(initialState);
        setImgFile(null);
      }
    } else alert("Please fill all the fields");
  }

  return (
    <div className="about-section-outlet">
      <p className="heading">/About</p>
      <h3>/About</h3>

      <Container>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Sub1"
              value={dataInfo.sub1}
              onChange={(e) =>
                setDataInfo({ ...dataInfo, sub1: e.target.value })
              }
            />
          </div>

          <div className="input-box">
            <input
              type="text"
              placeholder="Sub2"
              value={dataInfo.sub2}
              onChange={(e) =>
                setDataInfo({ ...dataInfo, sub2: e.target.value })
              }
            />
          </div>

          <div className="input-box">
            <input
              type="text"
              placeholder="Sub3"
              value={dataInfo.sub3}
              onChange={(e) =>
                setDataInfo({ ...dataInfo, sub3: e.target.value })
              }
            />
          </div>

          <div className="img-box">
            <label htmlFor="img-upload-file" className="uploadImg">
              Upload
            </label>
            <input
              type="file"
              name=""
              id="img-upload-file"
              onChange={handleUploadImg}
            />
          </div>

          {dataInfo.imgReader && (
            <img src={dataInfo.imgReader} alt="" className="img-preview" />
          )}

          <input type="submit" value={"Submit"} />
        </form>
      </Container>
    </div>
  );
}

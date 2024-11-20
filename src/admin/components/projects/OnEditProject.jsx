import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import "./OnEditProject.css";
import axios from "axios";
import { getAllProjects } from "../../../redux/actions/allActions";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  backgroundColor: "#000",
};

function OnEditProject(props) {
  const handleClose = () => props.setOpenEditModal(false);
  const initialState = {
    title: "",
    subTitle: "",
    desc: "",
    imgReader: "",
    link: "",
    github: "",
    video: "",
    types: [],
  };

  const dispatch = useDispatch();
  const [projectInfo, setProjectInfo] = useState(initialState);
  const [type, setType] = useState("");
  const [projectImg, setProjectImg] = useState(null);

  useEffect(() => {
    setProjectInfo({
      ...projectInfo,
      types: props.projectDetails.types,
    });
  }, [props.projectDetails.types]);

  const handleAddType = (value) => {
    if (value !== "") {
      setProjectInfo({
        ...projectInfo,
        types: [...projectInfo.types, value],
      });
      setType("");
    }
  };

  const handleDeleteType = (value) => {
    setProjectInfo({
      ...projectInfo,
      types: projectInfo.types.filter((item) => item !== value),
    });
  };

  const handleUploadImg = (e) => {
    const file = e.target.files[0];
    setProjectImg(file);

    const reader = new FileReader();

    reader.onload = (_) => {
      setProjectInfo({ ...projectInfo, imgReader: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (_) => {
    let flag;

    if (
      projectInfo.title !== "" ||
      projectInfo.subTitle !== "" ||
      projectInfo.desc !== "" ||
      projectImg !== null ||
      projectInfo.link !== "" ||
      projectInfo.github !== "" ||
      projectInfo.video !== "" ||
      projectInfo.types.length > 0
    ) {
      flag = true;
    } else flag = false;

    if (flag) {
      const formData = new FormData();
      if (projectInfo.title !== "") {
        formData.append("title", projectInfo.title);
      }

      if (projectInfo.subTitle !== "") {
        formData.append("subTitle", projectInfo.subTitle);
      }

      if (projectInfo.desc !== "") {
        formData.append("desc", projectInfo.desc);
      }

      if (projectImg !== null) {
        formData.append("img", projectImg);
      }

      if (projectInfo.link !== "") {
        formData.append("web", projectInfo.link);
      }

      if (projectInfo.github !== "") {
        formData.append("github", projectInfo.github);
      }

      if (projectInfo.video !== "") {
        formData.append("video", projectInfo.video);
      }

      if (projectInfo.types.length > 0) {
        formData.append("types", JSON.stringify(projectInfo.types));
      }

      try {
        await axios.post(
          `${import.meta.env.VITE_HOST}portfolioAdmin/projects/editProject.php`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${props.projectDetails.id}`,
            },
          }
        );

        alert("Project edited successfully");
        dispatch(getAllProjects());
        props.setOpenEditModal(false);
        setProjectInfo(initialState);
      } catch (err) {
        alert(err.response.data.message);
      }
    } else alert("Please fill all the fields");
  };

  return (
    <div className="on-edit-project">
      <Modal
        open={props.openEditModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Project ({props.projectDetails?.title})
          </Typography>

          <Stack spacing={2} mt={2}>
            <input
              type="text"
              placeholder="Title"
              value={projectInfo.title}
              onChange={(e) =>
                setProjectInfo({ ...projectInfo, title: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="subTitle"
              value={projectInfo.subTitle}
              onChange={(e) =>
                setProjectInfo({ ...projectInfo, subTitle: e.target.value })
              }
            />

            <textarea
              className="textarea"
              placeholder="Description"
              value={projectInfo.desc}
              onChange={(e) =>
                setProjectInfo({ ...projectInfo, desc: e.target.value })
              }
            />

            <div className="types-box">
              <textarea
                className="textarea"
                placeholder="Types"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />

              <Button
                variant="contained"
                color="success"
                className="btn-add"
                onClick={(_) => handleAddType(type)}
              >
                Add
              </Button>
            </div>

            <div className="types-content">
              <p>All Types:</p>

              <ul>
                {projectInfo.types?.map((type, index) => {
                  return (
                    <li key={index} onClick={(_) => handleDeleteType(type)}>
                      {type}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="img-box">
              <label htmlFor="upload_img" className="uploadImg">
                Upload
              </label>
              <input type="file" onChange={handleUploadImg} id="upload_img" />
            </div>

            {projectInfo?.imgReader && (
              <img
                className="on-edit-img-reader"
                src={projectInfo.imgReader}
                alt=""
              />
            )}

            <input
              type="text"
              placeholder="link"
              value={projectInfo.link}
              onChange={(e) =>
                setProjectInfo({ ...projectInfo, link: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="github"
              value={projectInfo.github}
              onChange={(e) =>
                setProjectInfo({ ...projectInfo, github: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="video"
              value={projectInfo.video}
              onChange={(e) =>
                setProjectInfo({ ...projectInfo, video: e.target.value })
              }
            />
          </Stack>

          <Stack direction={"row"} spacing={2} justifyContent={"end"} mt={2}>
            <Button
              variant="contained"
              color="success"
              onClick={() => props.setOpenEditModal(false)}
            >
              No
            </Button>

            <Button variant="contained" color="error" onClick={handleSubmit}>
              Yes
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default OnEditProject;

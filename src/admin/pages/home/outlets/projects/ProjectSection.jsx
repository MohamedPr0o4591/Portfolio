import React, { useEffect, useState } from "react";
import "./ProjectSection.css";
import { Button, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../../../../redux/actions/allActions";
import axios from "axios";
import OnDeleteProject from "../../../../components/projects/OnDeleteProject";
import OnEditProject from "../../../../components/projects/OnEditProject";

export default function ProjectSection() {
  const allProjects = useSelector((state) => state.GET_PROJECTS.projects);
  const dispatch = useDispatch();

  const initialState = {
    imgReader: "",
    title: "",
    subTitle: "",
    desc: "",
    types: "",
    projectLink: "",
    githubLink: "",
    videoLink: "",
  };

  const [inputInfo, setInputInfo] = useState(initialState);
  const [imgFile, setImgFile] = useState(null);

  const [projectTypes, setProjectTypes] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    id: "",
    title: "",
  });

  useEffect(() => {
    dispatch(getAllProjects());
  }, []);

  const uploadImg = (e) => {
    const file = e.target.files[0];

    setImgFile(file);
    // for img reader
    const reader = new FileReader();

    reader.onload = (_) => {
      setInputInfo({ ...inputInfo, imgReader: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let flag;

    if (
      inputInfo.title !== "" &&
      inputInfo.subTitle !== "" &&
      inputInfo.desc !== "" &&
      imgFile != null
    ) {
      flag = true;
    } else flag = false;

    if (flag) {
      const formData = new FormData();

      formData.append("title", inputInfo.title);
      formData.append("subTitle", inputInfo.subTitle);
      formData.append("desc", inputInfo.desc);
      formData.append("project", imgFile);
      formData.append("web", inputInfo.projectLink);
      formData.append("github", inputInfo.githubLink);
      formData.append("video", inputInfo.videoLink);
      formData.append("types", JSON.stringify(projectTypes));

      try {
        await axios.post(
          `${
            import.meta.env.VITE_HOST
          }portfolioAdmin/projects/uploadProject.php`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        dispatch(getAllProjects());
        setInputInfo(initialState);
        setProjectTypes([]);
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  const handleAddType = (value) => {
    if (value !== "") {
      setProjectTypes([...projectTypes, value]);
      setInputInfo({ ...inputInfo, types: "" });
    }
  };

  const handleDeleteType = (value) => {
    setProjectTypes(projectTypes.filter((item) => item !== value));
  };

  const handleDeleteProject = (id, title) => {
    setOpenDeleteModal(true);
    setProjectDetails({
      id,
      title,
    });
  };

  const handleEditProject = (id, title, types) => {
    setProjectDetails({
      id,
      title,
      types,
    });
    setOpenEditModal(true);
  };

  // دالة لتقطيع النص وتنسيقه
  const truncateDescription = (desc) => {
    if (desc.length > 20) {
      return desc.slice(0, 20) + "..."; // تقطيع النص إلى 20 حرفًا وإضافة ثلاث نقاط
    }
    return desc;
  };

  return (
    <div className="project-section-outlet">
      <p className="heading">/Projects</p>
      <h3>/Projects</h3>

      <Container className="project-container">
        <form onSubmit={handleSubmit}>
          <p>Create a project :</p>

          <input
            type="text"
            placeholder="Project Name"
            value={inputInfo.title}
            onChange={(e) =>
              setInputInfo({ ...inputInfo, title: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Project Sub Title"
            value={inputInfo.subTitle}
            onChange={(e) =>
              setInputInfo({ ...inputInfo, subTitle: e.target.value })
            }
          />

          <textarea
            type="text"
            placeholder="Project Description"
            value={inputInfo.desc}
            onChange={(e) =>
              setInputInfo({ ...inputInfo, desc: e.target.value })
            }
          />

          <div className="input-box">
            <textarea
              className="types"
              type="text"
              placeholder="Usage by:"
              value={inputInfo.types}
              onChange={(e) =>
                setInputInfo({ ...inputInfo, types: e.target.value })
              }
            />

            <Button
              variant="contained"
              color="success"
              className="btn-add"
              onClick={(_) => handleAddType(inputInfo.types)}
            >
              Add
            </Button>
          </div>

          <br />

          {projectTypes.length > 0 && (
            <div className="project-types">
              <p>
                <b>Project Types:</b>
              </p>

              <ul>
                {projectTypes.map((item, index) => (
                  <li
                    className="tag"
                    key={index}
                    onClick={(_) => handleDeleteType(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <input
            type="text"
            placeholder="Project Link"
            value={inputInfo.projectLink}
            onChange={(e) =>
              setInputInfo({ ...inputInfo, projectLink: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Project Github Link"
            value={inputInfo.githubLink}
            onChange={(e) =>
              setInputInfo({ ...inputInfo, githubLink: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Project Video"
            value={inputInfo.videoLink}
            onChange={(e) =>
              setInputInfo({ ...inputInfo, videoLink: e.target.value })
            }
          />

          <br />
          <br />

          <p>Project Photo</p>
          <div className="img-box">
            <label htmlFor="upload">Upload</label>
            <input type="file" id="upload" onChange={uploadImg} />
          </div>
          <br />

          {inputInfo?.imgReader && <img src={inputInfo.imgReader} alt="" />}

          <input type="submit" value={"Submit"} />
        </form>

        <hr />

        <p>All Projects</p>

        <div className="project-parent-box">
          {allProjects?.map((item, index) => {
            return (
              <div className="project-box" key={item.p_id}>
                <div className="project-content">
                  <span>{index + 1}</span>
                  <h3>{item.p_title}</h3>
                  <h4>{item.p_subTitle}</h4>
                  <p>{truncateDescription(item.p_desc)}</p>{" "}
                  {/* تطبيق التقطيع هنا */}
                  <strong>
                    <ul>
                      {item.p_types.p_type.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </strong>
                </div>
                <div className="project-img">
                  <img
                    src={`${import.meta.env.VITE_HOST}portfolioAdmin/upload/${
                      item.p_img
                    }`}
                    alt={item.p_title}
                  />

                  <div className="btn">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={(_) =>
                        handleDeleteProject(item.p_id, item.p_title)
                      }
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={(_) =>
                        handleEditProject(
                          item.p_id,
                          item.p_title,
                          item.p_types.p_type
                        )
                      }
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <OnEditProject
          setOpenEditModal={setOpenEditModal}
          projectDetails={projectDetails}
          openEditModal={openEditModal}
        />

        <OnDeleteProject
          setOpenDeleteModal={setOpenDeleteModal}
          openDeleteModal={openDeleteModal}
          projectDetails={projectDetails}
        />
      </Container>
    </div>
  );
}

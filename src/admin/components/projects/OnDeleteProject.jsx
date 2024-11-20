import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../../../redux/actions/allActions";

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

function OnDeleteProject(props) {
  const handleClose = () => props.setOpenDeleteModal(false);
  const dispatch = useDispatch();

  const handleDeleteProject = async (_) => {
    try {
      await axios.delete(
        `${
          import.meta.env.VITE_HOST
        }portfolioAdmin/projects/deleteProject.php?id=${
          props.projectDetails.id
        }`
      );

      props.setOpenDeleteModal(false);
      dispatch(getAllProjects());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="on-delete-project">
      <Modal
        open={props.openDeleteModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Project
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: "1.5rem" }}
          >
            Are you sure you want to delete{" "}
            <span style={{ color: "var(--main-color)" }}>
              {props.projectDetails.title}
            </span>{" "}
            ?!
          </Typography>

          <Stack direction={"row"} spacing={2} justifyContent={"end"} mt={2}>
            <Button
              variant="contained"
              color="success"
              onClick={() => props.setOpenDeleteModal(false)}
            >
              No
            </Button>

            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteProject}
            >
              Yes
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default OnDeleteProject;

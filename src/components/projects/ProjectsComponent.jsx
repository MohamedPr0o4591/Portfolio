import React, { useEffect, useState } from "react";
import "./ProjectsComponent.css";
import SectionTitle from "../SectionTitle";
import { Button, Stack } from "@mui/material";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@mui/icons-material";
import Card from "./Card";
import { projects } from "../../data";

export default function ProjectsComponent() {
  const [listProjects, setListProjects] = useState([]);
  const [filter, setFilter] = useState(true);

  useEffect(() => {
    let newArr = [];

    if (projects.length > 6 && filter) {
      for (let i = projects.length - 6; i < projects.length; i++) {
        newArr.push(projects[i]);
      }

      setListProjects(newArr);
    } else setListProjects(projects);
  }, [projects, filter]);

  return (
    <div className="latest-projects d-flex flex-column gap-3" id="projects">
      <SectionTitle title1="Latest" title2="Projects" />
      {/* web projects */}
      <div className="webProjects">
        <span className="title">
          Web <p>Projects</p> ({projects.length})
        </span>
        <Stack direction={"row"} flexWrap={"wrap"} width={100 + "%"} gap={2}>
          {listProjects?.map((project, index) => {
            return (
              <Card
                key={index}
                img={project.img}
                title={project.name}
                link={project.link}
                desc={project.desc}
              />
            );
          })}
        </Stack>

        {projects.length > 6 && (
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => setFilter(!filter)}
            endIcon={
              filter ? <KeyboardArrowDownRounded /> : <KeyboardArrowUpRounded />
            }
            className="btn"
          >
            {filter ? "Show More" : "Show Less"}
          </Button>
        )}
      </div>
    </div>
  );
}

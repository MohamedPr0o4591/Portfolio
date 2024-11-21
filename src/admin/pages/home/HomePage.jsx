import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { decryptedToken } from "../../../Crypted";
import axios from "axios";
import "./HomePage.css";
import { Link } from "react-router-dom";
import {
  AccountTreeOutlined,
  AccountTreeRounded,
  ContactsOutlined,
  ContactSupportOutlined,
  HomeOutlined,
  InfoOutlined,
  PersonOutline,
} from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

const data = [
  {
    icon: <HomeOutlined sx={{ fontSize: "2.5rem" }} />,
    title: "Home",
    path: "/admin/dashboard",
  },
  {
    icon: <InfoOutlined sx={{ fontSize: "2.5rem" }} />,
    title: "About",
    path: "/admin/dashboard/about",
  },
  {
    icon: <AccountTreeOutlined sx={{ fontSize: "2.5rem" }} />,
    title: "Projects",
    path: "/admin/dashboard/projects",
  },
  {
    icon: <ContactSupportOutlined sx={{ fontSize: "2.5rem" }} />,
    title: "Contact",
    path: "/admin/dashboard/contact",
  },
];

function HomePage() {
  const nav = useNavigate();

  useEffect(() => {
    window.document.title = "Admin | Mohamed Mokhtar";
    async function checkAuth() {
      if (!localStorage.adminToken) {
        nav("/admin/login");
        return;
      }

      const token = decryptedToken(localStorage.adminToken);

      if (token) {
        try {
          await axios.post(
            `${import.meta.env.VITE_HOST}/portfolioAdmin/auth/checkAuth.php`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!location.pathname.includes("/admin/dashboard")) {
            nav("/admin/dashboard");
          }
        } catch (error) {
          localStorage.clear();
          nav("/admin/login");
        }
      } else {
        localStorage.clear();
        nav("/admin/login");
      }
    }

    checkAuth();
  }, [nav]);

  return (
    <section className="admin-home-page">
      <div className="slide">
        <h2>
          Welcome <span>Admin</span>
        </h2>

        <ul>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`${
                    location.pathname == item.path ? "active" : ""
                  }`}
                >
                  {item.icon}
                  <span>{item.title} Section</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        className="slide-min-screen"
      >
        <h4>Manager</h4>

        <Stack direction={"row"} alignItems={"center"} gap={1}>
          {data.map((item, index) => {
            return (
              <IconButton
                color="inherit"
                key={index}
                onClick={(_) => {
                  nav(item.path);
                }}
              >
                {item.icon}
              </IconButton>
            );
          })}
        </Stack>
      </Stack>

      <Outlet />
    </section>
  );
}

export default HomePage;

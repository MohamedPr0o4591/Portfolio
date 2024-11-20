import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import Login from "./pages/auth/Login";
import HomeSection from "./pages/home/outlets/HomeSection";
import ErrPage from "../pages/error/ErrPage";
import AboutSection from "./pages/home/outlets/about/AboutSection";
import ContactSection from "./pages/home/outlets/contact/ContactSection";
import ProjectSection from "./pages/home/outlets/projects/ProjectSection";

function Admin() {
  return (
    <div className="Admin">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<HomePage />}>
          <Route index element={<HomeSection />} />
          <Route path="about" element={<AboutSection />} />
          <Route path="contact" element={<ContactSection />} />
          <Route path="projects" element={<ProjectSection />} />
        </Route>
        <Route path="*" element={<ErrPage />} />
      </Routes>
    </div>
  );
}

export default Admin;

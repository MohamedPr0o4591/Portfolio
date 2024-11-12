import React, { useEffect, useRef, useState } from "react";
import NavBar from "./utilities/navbar/NavBar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./utilities/Footer/Footer";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import Admin from "./admin/Admin";
import ErrPage from "./pages/error/ErrPage";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="App">
      <NavBar activeSection={activeSection} />

      <Routes>
        <Route
          index
          element={<HomePage setActiveSection={setActiveSection} />}
        />

        <Route path="/admin/*" element={<Admin />} />

        <Route path="*" element={<ErrPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

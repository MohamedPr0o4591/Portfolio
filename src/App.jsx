import React, { useEffect, useRef, useState } from "react";
import NavBar from "./utilities/navbar/NavBar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "/src/utilities/footer/Footer.jsx";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = useRef({
    home: null,
    about: null,
    projects: null,
    contact: null,
  });

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return (_) => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="App">
      <NavBar activeSection={activeSection} />

      <HomeSection sectionRefs={sectionRefs} />

      <AboutSection sectionRefs={sectionRefs} />

      <ProjectsSection sectionRefs={sectionRefs} />

      <ContactSection sectionRefs={sectionRefs} />

      <Footer />
    </div>
  );
}

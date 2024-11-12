import React, { useEffect, useRef } from "react";
import HomeSection from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";
import ProjectsSection from "../../components/ProjectsSection";
import ContactSection from "../../components/ContactSection";

function HomePage(props) {
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
            props.setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-50% 0px -50% 0px",
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
    <div className="home-page">
      <HomeSection sectionRefs={sectionRefs} />

      <AboutSection sectionRefs={sectionRefs} />

      <ProjectsSection sectionRefs={sectionRefs} />

      <ContactSection sectionRefs={sectionRefs} />
    </div>
  );
}

export default HomePage;

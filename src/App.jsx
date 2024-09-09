import React, { useEffect, useMemo, useRef, useState } from "react";
import TopBar from "./utilities/TopBar/TopBar";
import { Container } from "react-bootstrap";
import HomeComponent from "./components/home/HomeComponent";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./theme";
import AboutComponent from "./components/about/AboutComponent";
import ProjectsComponent from "./components/projects/ProjectsComponent";
import Footer from "./utilities/Footer/Footer";
import Contact from "./components/contact/Contact";

function App() {
  const [mode, setMode] = useState(
    localStorage.mode ? localStorage.mode : "light"
  );

  const [activeSection, setActiveSection] = useState('home');

  // Refs for each section

  const sectionsRef = useRef(
    {
      home: null,
      about: null,
      projects: null,
      contact: null,
    }
  )

  useEffect(() => {
    localStorage.mode = mode;
  }, [mode]);


  useEffect(_ => {
    const observer = new IntersectionObserver(
      enteries => {
        enteries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        })
      },
      {
        threshold: 0.5
      } // 50% of the section needs to be visible
    );

    // Observe all sections
    Object.values(sectionsRef.current).forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return _ => {
      // Cleanup observer
      Object.values(sectionsRef.current).forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      })
    };
  }, []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <div
        className="app"
        style={{
          background: getDesignTokens(mode).palette.background.primary,
          color: theme.palette.text.primary,
        }}
      >
        <TopBar setMode={setMode} activeSection={activeSection} />

        <Container>
          <HomeComponent sectionsRef={sectionsRef} />

          <AboutComponent sectionsRef={sectionsRef} />

          <ProjectsComponent sectionsRef={sectionsRef} />

          <Contact sectionsRef={sectionsRef} />
        </Container>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

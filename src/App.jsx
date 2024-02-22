import React, { useEffect } from 'react'
import TopBar from './utilities/TopBar/TopBar'
import { Container } from 'react-bootstrap'
import HomeComponent from './components/home/HomeComponent'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getDesignTokens } from './theme';
import AboutComponent from './components/about/AboutComponent';
import ProjectsComponent from './components/projects/ProjectsComponent';
import Footer from './utilities/Footer/Footer';
import Contact from './components/contact/Contact';

function App() {
  const [mode, setMode] = React.useState(
    localStorage.mode ? localStorage.mode : 'light'
  );

  useEffect(() => {
    localStorage.mode = mode;
  }, [mode])

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


  return (
    <ThemeProvider theme={theme}>
      <div className='app'
        style={{
          background: getDesignTokens(mode).palette.background.primary,
          color: theme.palette.text.primary,
        }}
      >

        <TopBar
          setMode={setMode}
          getDesignTokens={getDesignTokens}
        />

        <Container >
          <HomeComponent  />

          <AboutComponent  />

          <ProjectsComponent />

          <Contact />
        </Container>

        <Footer />
      </div>
    </ThemeProvider >
  )
}

export default App

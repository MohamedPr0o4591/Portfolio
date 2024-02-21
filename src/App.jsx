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
// import cv from './assets/cv.pdf'

function App() {
  const [mode, setMode] = React.useState(
    localStorage.mode ? localStorage.mode : 'light'
  );

  useEffect(() => {
    localStorage.mode = mode;
  }, [mode])

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // const handleDownloadCV = () => {
  //   fetch(cv)
  //     .then(res => {
  //       // تحديد اسم الملف في رأس الاستجابة
  //       let fileName = 'CV.pdf';
  //       const disposition = res.headers.get('content-disposition');
  //       if (disposition && disposition.includes('attachment')) {
  //         const [, filename] = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(disposition);
  //         if (filename) {
  //           fileName = filename.replace(/['"]/g, '');
  //         }
  //       }

  //       // تحويل الرد إلى كائن Blob
  //       return res.blob().then(blob => {
  //         // استخدام downloadjs لتنزيل الملف
  //         download(blob, fileName, 'application/pdf');
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error downloading CV:', error);
  //     });
  // };

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

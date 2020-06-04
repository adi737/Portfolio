import React, { useState } from 'react';
import Navigation from 'layouts/Navigation';
import Content from 'layouts/Content';
import Footer from 'layouts/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Container from 'styledComponents/Container.css';

function App() {
  // const theme = {
  //   red: 'red'
  // }
  const [theme, setTheme] = useState({ isLightTheme: true });
  console.log(`invoke App`);
  return (
    <ThemeProvider theme={theme}>
      <Container >
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <header className='header'>
              <Navigation />
            </header>
            <main className='main'>
              <Content setTheme={setTheme} />
            </main>
            <footer className='footer'>
              <Footer />
            </footer>
          </div>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;

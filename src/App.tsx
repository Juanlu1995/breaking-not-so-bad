import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import Header from './containers/Header';
import Main from './pages/Main';
/*
TODO list
  Add an error boundary
  Add a theme
  Do the request
  Create interfaces
  Create routes
  Study if developer options works
  Study deploy
  Create or modify README.md
*/
function App() {
  return (
    <>
      <Header />
      <Container maxWidth={'xl'}>
        <Main />
      </Container>
    </>
  );
}

export default App;

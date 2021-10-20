import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import Characters from './containers/Characters';
import Header from './containers/Header';
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
        <Characters />
      </Container>
    </>
  );
}

export default App;

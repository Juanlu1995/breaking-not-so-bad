import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import Characters from './containers/Characters';

function App() {
  return (
    <Container maxWidth={'xl'}>
      <Characters />
    </Container>
  );
}

export default App;

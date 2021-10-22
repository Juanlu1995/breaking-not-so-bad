import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import Header from './containers/Header';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';
import { routes } from './routes';

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
        <BrowserRouter>
          {routes.map((r: RouteProps) => (
            <Route exact={r?.exact} component={r?.component} strict={r?.strict} path={r?.path} />
          ))}
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;

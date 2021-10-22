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
  Study deploy
  Create or modify README.md
*/
function App() {
  return (
    <>
      <Header />
      <Container maxWidth={'xl'}>
        <BrowserRouter>
          {routes.map((r: RouteProps, index: number) => (
            <Route
              exact={r?.exact}
              component={r?.component}
              strict={r?.strict}
              path={r?.path}
              key={`route_${index}`}
            />
          ))}
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;

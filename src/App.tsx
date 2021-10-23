import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import Header from './containers/Header';
import { BrowserRouter, Route, RouteProps } from 'react-router-dom';
import { routes } from './routes';
import { ThemeProvider } from 'styled-components';

/*
TODO list
  Add an error boundary
  Add a theme
  Study deploy
  Create or modify README.md
*/
function App() {
  const theme = createTheme();
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
}

export default App;

import { RouteProps } from 'react-router-dom';
// import App from './App';
import Main from './pages/Main';

export const routes: RouteProps[] = [
  {
    path: '/',
    component: Main,
    exact: true,
  },
  // {
  //   path: '/character/:id',
  //   component: Character,
  //   exact: true,
  // },
];

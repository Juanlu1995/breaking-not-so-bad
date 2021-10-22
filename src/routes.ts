import { RouteProps } from 'react-router-dom';
// import App from './App';
import Main from './pages/Main';
import CharacterDetail from './pages/CharacterDetail';

export const routes: RouteProps[] = [
  {
    path: '/',
    component: Main,
    exact: true,
  },
  {
    path: '/character/:id',
    component: CharacterDetail,
    exact: true,
    strict: true,
  },
];

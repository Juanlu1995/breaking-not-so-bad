import { RouteProps } from 'react-router-dom';
// import App from './App';
import Main from './pages/Main';
import CharacterDetailPage from './pages/CharacterDetailPage';

export const routes: RouteProps[] = [
  {
    path: '/',
    component: Main,
    exact: true,
  },
  {
    path: '/character/:id',
    component: CharacterDetailPage,
    exact: true,
    strict: true,
  },
];

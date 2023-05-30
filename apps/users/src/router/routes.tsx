import { HomePage, CreateCard, UpdateCard, About } from '@mentorship/users/pages';
import { RouteProps } from 'react-router-dom';

export const routes: RouteProps[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/create',
    element: <CreateCard />,
  },
  {
    path: '/update',
    element: <UpdateCard />,
  },
  {
    path: '/about',
    element: <About />,
  },
];

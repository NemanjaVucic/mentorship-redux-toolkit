import { RouteProps } from 'react-router-dom';

import { About } from '../pages/about/About';
import { CreateCard } from '../pages/create-card/CreateCard';
import { HomePage } from '../pages/home-page/HomePage';
import { UpdateCard } from '../pages/update-card/UpdateCard';

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

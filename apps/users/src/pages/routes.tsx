import { RouteProps } from 'react-router-dom';

import { About } from './about/About';
import { CreateCard } from './create-card/CreateCard';
import { HomePage } from './home-page/HomePage';
import { UpdateCard } from './update-card/UpdateCard';

const routes: RouteProps[] = [
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

export default routes;

import { RouteProps } from 'react-router';
import { HomePage } from './home-page/HomePage';
import { CreateCard } from './create-card/CreateCard';
import { UpdateCard } from './update-card/UpdateCard';
import { About } from './about/About';

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

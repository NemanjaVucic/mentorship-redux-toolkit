import { HomePage, CreateCard, UpdateCard, About } from '@mentorship/users/pages';
import { RoutePath } from '@mentorship/users/shared';
import { RouteProps } from 'react-router-dom';

export const routes: RouteProps[] = [
  {
    path: RoutePath.home,
    element: <HomePage />,
  },
  {
    path: RoutePath.createUser,
    element: <CreateCard />,
  },
  {
    path: RoutePath.updateUser,
    element: <UpdateCard />,
  },
  {
    path: RoutePath.about,
    element: <About />,
  },
];

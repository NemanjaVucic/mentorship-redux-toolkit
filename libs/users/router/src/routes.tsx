import { HomePage, About, CreatePage, UpdatePage } from '@mentorship/users/pages';
import { RoutePath } from '@mentorship/users/shared';
import { RouteProps } from 'react-router-dom';

export const routes: RouteProps[] = [
  {
    path: RoutePath.home,
    element: <HomePage />,
  },
  {
    path: RoutePath.createUser,
    element: <CreatePage />,
  },
  {
    path: RoutePath.updateUser,
    element: <UpdatePage />,
  },
  {
    path: RoutePath.about,
    element: <About />,
  },
];

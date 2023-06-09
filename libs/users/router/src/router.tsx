import { Route, RouteProps, Routes } from 'react-router-dom';

import { routes } from './routes';

export const PageRouter = () => {
  const pageRoutes = routes.map(({ path, element }: RouteProps) => {
    return <Route key={path} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

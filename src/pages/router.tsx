import { Route, Routes } from 'react-router-dom';
import pagesData, { RouterType } from './pagesData';

const PageRouter = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: RouterType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default PageRouter;

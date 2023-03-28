import { HomePage } from './home-page/HomePage';
import { CreateCard } from './create-card/CreateCard';
import { UpdateCard } from './update-card/UpdateCard';
import { About } from './about/About';

export interface RouterType {
  path: string;
  element: JSX.Element;
  title: string;
}

const pagesData: RouterType[] = [
  {
    path: '/',
    element: <HomePage />,
    title: 'home',
  },
  {
    path: '/create',
    element: <CreateCard />,
    title: 'create-card',
  },
  {
    path: '/update',
    element: <UpdateCard />,
    title: 'update-card',
  },
  {
    path: '/about',
    element: <About />,
    title: 'about',
  },
];

export default pagesData;

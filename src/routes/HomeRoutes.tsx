import { useRoutes } from 'react-router-dom';
import Home from '../components/home/Home';
import About from '../components/home/About';
import Contact from '../components/home/Contact';

function HomeRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ]);
  return routes;
}

export default HomeRoutes;

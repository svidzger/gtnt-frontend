import { useRoutes } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import RegistrationForm from '../components/auth/RegistrationForm';

const AuthRoutes = () => {
  const routes = useRoutes([
    {
      path: '/login',
      element: <LoginForm />,
    },
    {
      path: '/register',
      element: <RegistrationForm />,
    },
  ]);
  return routes;
};

export default AuthRoutes;

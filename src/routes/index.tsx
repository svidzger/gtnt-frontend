import { Routes, Route } from 'react-router-dom';
import AuthRoutes from './AuthRoutes';
import HomeRoutes from './HomeRoutes';

const Root = () => (
  <Routes>
    <Route path='*' element={<HomeRoutes />} />
    <Route path='/auth/*' element={<AuthRoutes />} />
  </Routes>
);

export default Root;

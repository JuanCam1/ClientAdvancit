import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '@/pages/Login';
import PrivateRoute from './PrivateRoute';
import DashboardRoute from './DashboardRoute';
import { useCompanyStore } from '@/store';

const AppRoute = () => {
  const { isAuth } = useCompanyStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Login />} />
        <Route
          path='auth/*'
          element={
            <PrivateRoute isAuth={isAuth}>
              <DashboardRoute />
            </PrivateRoute>
          }
        />

        {/* <Route path="*" element={<ViewError />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;

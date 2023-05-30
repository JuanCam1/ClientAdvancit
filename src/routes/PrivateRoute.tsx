import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  isAuth: boolean;
  children?: React.ReactNode;
}

const PrivateRoute = ({ children, isAuth }: Props) => {
  if (!isAuth) return <Navigate to='/' />;
  return children ? <>{children}</> : <Outlet />;
};

export default PrivateRoute;

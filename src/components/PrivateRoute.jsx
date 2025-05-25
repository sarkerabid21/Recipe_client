import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;

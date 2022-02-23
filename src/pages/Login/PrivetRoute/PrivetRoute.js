import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivetRoute = ({ children }) => {
   const { user } = useAuth();
  return user?.email ? children : <Navigate to="/login" />;
};

export default PrivetRoute;
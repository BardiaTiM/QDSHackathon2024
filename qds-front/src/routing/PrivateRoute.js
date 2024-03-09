// src/PrivateRoute.js
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext';

export const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    console.log('PrivateRoute, isAuthenticated:', isAuthenticated); // Debug
    return isAuthenticated ? children : <Navigate to="/login" />;
};
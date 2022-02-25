import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    let location = useLocation();

    if (isLoading) {
        return <Spinner animation="border" variant="primary" />
    }

    return user.email ? children
        :
        <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;
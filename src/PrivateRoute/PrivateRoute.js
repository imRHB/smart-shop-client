import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children, ...rest }) => {
    const { employee } = useAuth();

    const loading = useSelector((state) => state.entities.employee.loading);

    let location = useLocation();

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    return employee.email ? children
        :
        <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;
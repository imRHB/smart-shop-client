import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
  display: block;
  border-color: red;
  margin: 40vh auto;
`;

const PrivateRoute = ({ children, ...rest }) => {
    const { employee, isLoading } = useAuth();

    // const loading = useSelector((state) => state.entities.employee.loading);

    let location = useLocation();

    if (isLoading) {
        return <div className="text-center mt-3">
            <FadeLoader
                color={"#123abc"}
                loading={isLoading}
                css={override}
                height={10}
                width={6}
                radius={2}
                margin={2}
            />
        </div>
    }

    return employee.email ? children
        :
        <Navigate to="/login" state={{ from: location }} />
};

export default PrivateRoute;
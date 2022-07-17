import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';

const PrivateRoute = () => {
    const user = useSelector(selectUser);

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return (
        <>
            {user ? (
                <Navigate to="/home" />
            ) : (
                <Navigate to="/login" />)}
        </>
    )
}

export default PrivateRoute
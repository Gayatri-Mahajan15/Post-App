import React from 'react';
import { Outlet } from 'react-router-dom';

const Login = () => {
    return (
    <div>
        <Outlet />
        Login Page
    </div> 
);
}

export default Login;
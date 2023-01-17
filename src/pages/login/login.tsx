import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Hello World, it's a login page</h1>
            <button onClick={() => navigate('/home')}>Go to home</button>
        </>
    );
};

export default Login;

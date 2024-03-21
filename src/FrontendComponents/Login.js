import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getPasswordFromLocalStorage } from '../utilities/utils';
const LoginPage = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = () => {

        if (password === "adminPassword") {

            localStorage.setItem('loginPassword', password);
            navigate('/Home');
        }
        else {
            alert('Wrong, continue as guest');
            navigate('/Home');
        }

    }

    return(

        <div>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Admin Login</button>
            <button onClick={() => navigate('/Home')}>Continue as Guest/Student</button>

        </div>
    )


}

export default LoginPage;
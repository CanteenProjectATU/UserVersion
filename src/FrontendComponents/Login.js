import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getPasswordFromLocalStorage } from '../utilities/utils';
import '../CssFiles/Login.css';

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleLogin = async () => {

        try {
            const response = await axios.post('http://localhost:4000/login', {password});
            const isValidPassword = response.data;

            if (isValidPassword) {
                localStorage.setItem('loginPassword', password);
                navigate('/Home');
            }
            else {
                alert('Wrong, continue as guest');
            navigate('/Home');
            }
        }catch (error) {
            console.log("Login Failed");
            
        }
    }

    return(

        <div className='loginPage'>
            <h1>Login</h1>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br></br>
            <button onClick={handleLogin} className='buttons'>Submit Password</button>
            <br></br>
            <button onClick={() => navigate('/Home')} className='buttons'>Continue as Guest/Student</button>

        </div>
    )


}

export default LoginPage;
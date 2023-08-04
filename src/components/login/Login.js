import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const navigate = useNavigate();

    function handleRecClick(){
        navigate('/home');
    }
    
    return (
        <div className='component login'>
            <p>
                Sign into your Spotify account
            </p>
            <button onClick={handleRecClick}>
                To your Recommender...
            </button>
        </div>
    )
}

export default SignIn
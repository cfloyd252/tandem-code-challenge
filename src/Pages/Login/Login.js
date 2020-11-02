import React, { useState } from 'react';
import TokenService from '../../Services/token-service';
import AuthApiService from '../../Services/auth-api-service';

import './Login.css'

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitJwtAuth = async(ev) => {
    ev.preventDefault()

    try {
      const res = await AuthApiService.postLogin({
        username,
        password,
      })

      TokenService.saveAuthToken(res.authToken)
      props.history.push('/app/trivia')
    } catch(res) {
      console.log(res.error);
      ev.target.password.value = '';
    }
  };

  return (
    <form id='loginForm' onSubmit={handleSubmitJwtAuth}>
      <label htmlFor='username' className='hidden'>Username</label>
      <input id='username' type='text' placeholder='Username' onChange={e => setUsername(e.target.value)}/>
      <label htmlFor='password' className='hidden'>Password</label>
      <input id='password' type='password' placeholder='Password' onChange={e => setPassword(e.target.value)}/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Login

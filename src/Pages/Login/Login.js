import React, { Component } from 'react';
import TokenService from '../../Services/token-service';
import AuthApiService from '../../Services/auth-api-service';

import './Login.css'

function Login(props) {

  const handleSubmitJwtAuth = async(ev) => {
    ev.preventDefault()
    const { username, password } = ev.target

    try {
      const res = await AuthApiService.postLogin({
        username: username.value,
        password: password.value,
      })

      TokenService.saveAuthToken(res.authToken)
      props.history.push('/app/trivia')
    } catch(res) {
      console.log(res.error)
    }
  };

  return (
    <form id='loginForm' onSubmit={handleSubmitJwtAuth}>
      <label htmlFor='username' className='hidden'>Username</label>
      <input id='username' type='text' placeholder='Username'/>
      <label htmlFor='password' className='hidden'>Password</label>
      <input id='password' type='password' placeholder='Password'/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Login

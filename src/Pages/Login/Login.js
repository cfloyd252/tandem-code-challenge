import React, { Component } from 'react';
import TokenService from '../../Services/token-service';
import AuthApiService from '../../Services/auth-api-service';

import './Login.css'

export class Login extends Component {

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value= ''
        TokenService.saveAuthToken(res.authToken)
        this.props.history.push('/app/trivia')
      })
      .catch(res => this.context.setError(res.error))
  }

  render() {
    return (
      <form id='loginForm' onSubmit={this.handleSubmitJwtAuth}>
        <label htmlFor='username' className='hidden'>Username</label>
        <input id='username' type='text' placeholder='Username'/>
        <label htmlFor='password' className='hidden'>Password</label>
        <input id='password' type='password' placeholder='Password'/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Login

import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <form>
        <label htmlFor='username' className='hidden'>Username</label>
        <input id='username' type='text' placeholder='Username'/>
        <label htmlFor='password' className='hidden'>Password</label>
        <input id='password' type='password' placeholder='Password'/>
        <button>Submit</button>
      </form>
    )
  }
}

export default Login

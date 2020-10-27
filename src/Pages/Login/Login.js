import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text'></input>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password'></input>
        <button>Submit</button>
      </div>
    )
  }
}

export default Login

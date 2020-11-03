import React, { useState } from 'react';
import UsersApiService from '../../Services/user-api-service';
import AuthApiService from '../../Services/auth-api-service';
import TokenService from '../../Services/token-service';


function Registration(props) {
  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const newUser = {
      first_name: firstName,
      username,
      password
    }

    UsersApiService.postUser(newUser)
    .then(user => {
      // this.context.setUser(user)
      AuthApiService.postLogin({
        username,
        password
      })
        .then(res => {
          TokenService.saveAuthToken(res.authToken)
          props.history.push('/app/trivia')
        })
    })
    .catch(res => {
      // this.context.setError(res.error)
      console.log(res.error)
    });
  }

  return (
    <form id='registrationForm' onSubmit={handleSubmit}>
      <h1>Registration</h1>
      <label className='hidden' htmlFor='firstName'>First Name</label>
      <input id='firstName' placeholder='First Name' onChange={e => setFirstName(e.target.value)}/>
      <label className='hidden' htmlFor='username'>Create Username</label>
      <input id='username' placeholder='Create Username' onChange={e => setUsername(e.target.value)}/>
      <label className='hidden' htmlFor='password'>Create Password</label>
      <input id='password' type='password' placeholder='Create Password' onChange={e => setPassword(e.target.value)}/>
      <label className='hidden' htmlFor='passwordConfirmation'>Confirm Password</label>
      <input id='passwordConfirmation' type='password' placeholder='Confirm Password' onChange={e => setConfirmation(e.target.value)}/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Registration

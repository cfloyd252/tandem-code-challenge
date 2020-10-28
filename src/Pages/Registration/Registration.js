import React, { useState } from 'react'

function Registration() {
  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form id='registrationForm'>
      <h1>Registration</h1>
      <label className='hidden' htmlFor='firstName'>First Name</label>
      <input id='firstName' placeholder='First Name' />
      <label className='hidden' htmlFor='username'>Create Username</label>
      <input id='username' placeholder='Create Username'/>
      <label className='hidden' htmlFor='password'>Create Password</label>
      <input id='password' type='password' placeholder='Create Password'/>
      <label className='hidden' htmlFor='passwordConfirmation'>Confirm Password</label>
      <input id='passwordConfirmation' type='password' placeholder='Confirm Password'/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Registration

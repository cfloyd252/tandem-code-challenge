import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import './Header.css'

function Header(props) {
  const handleLogOut = () => {
    TokenService.clearAuthToken()
    props.history.push('/app/login')
  }

  const renderAuthorization = () => {
    return (
      TokenService.hasAuthToken()
        ? <button onClick={handleLogOut}>Log Out</button>
        : <Link className='headerLink' id='loginLink' to='/app/login'>Sign In</Link>
    )
  }

  return (
    <header id='header'>
      <Link className='headerLink' id='homeLink' to='/app/trivia'>Team Trivia</Link>
      <Link className='headerLink' id='leaderbaordLink' to='/app/leaderboard'>Leaderboard</Link>
      {renderAuthorization()}
    </header>
  )
}

export default Header

import React from 'react'
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
        ? <button className='headerItem' id='logOutButton' onClick={handleLogOut}>Log Out</button>
        : <Link className='headerItem' id='loginLink' to='/app/login'>Sign In</Link>
    )
  }

  return (
    <header id='header'>
      <Link className='headerItem' id='homeLink' to='/app/trivia'>Team Trivia</Link>
      <Link className='headerItem' id='leaderbaordLink' to='/app/leaderboard'>Leaderboard</Link>
      {renderAuthorization()}
    </header>
  )
}

export default Header

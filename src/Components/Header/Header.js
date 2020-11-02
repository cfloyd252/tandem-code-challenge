import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <header id='header'>
        <Link className='headerLink' id='homeLink' to='/app/trivia'>Team Trivia</Link>
        <Link className='headerLink' id='leaderbaordLink' to='/app/leaderboard'>Leaderboard</Link>
        <Link className='headerLink' id='loginLink' to='/app/login'>Sign In</Link>
      </header>
    )
  }
}

export default Header

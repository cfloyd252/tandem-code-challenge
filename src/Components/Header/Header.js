import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <section id='header'>
        <Link className='headerLink' id='homeLink' to='/app/trivia'>Tandem Trivia</Link>
        <Link className='headerLink' id='leaderbaordLink' to='/app/leaderboard'>Leaderboard</Link>
        <Link className='headerLink' id='loginLink' to='/app/login'>Sign In</Link>
      </section >
    )
  }
}

export default Header

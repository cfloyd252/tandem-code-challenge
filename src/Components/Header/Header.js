import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <section id='header'>
        <Link to='/app/trivia'>Tandem Trivia</Link>
        <Link to='/app/leaderboard'>Leaderboard</Link>
        <Link to='/app/login'>Sign In</Link>
      </section >
    )
  }
}

export default Header

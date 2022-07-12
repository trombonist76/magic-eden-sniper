import React from 'react'
import {Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="menu">
      <Link to="/">Magic-Eden Sniper</Link>
      <nav>
        <Link to="/snipe">Snipe</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/activities">Activities</Link>
      </nav>

    </div>

  )
}

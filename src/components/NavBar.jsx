import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
        <h1>Budget Breakdown</h1>
        <Link to='/'> Home </Link>
        <Link to='/InputForm'>Add a New transaction</Link>
        
            
    </nav>
  )
}

export default NavBar

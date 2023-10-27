import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div>
       <NavLink className="nav-link1"  to='/'><h1> Home Automation</h1></NavLink>
        </div>
        <div className='hlw' >
            <ul className='hlist'>
            <li><NavLink className="nav-link" activeclassname="active" to='/'>Home</NavLink></li>
            <li><NavLink className="nav-link" activeclassname="active" to='deviceroom'>Device Room </NavLink></li>
            <li><NavLink className="nav-link" activeclassname="active" to='Signup'>Profile</NavLink></li>
            
            </ul>
        </div>
    </header>
  )
}

export default Header
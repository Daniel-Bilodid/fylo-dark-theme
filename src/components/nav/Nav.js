import React from 'react'
import './Nav.scss'
import Logo from '../../assets/icons/logo.svg'
const Nav = () => {
  return (
    <header className='nav'>
        <div className="nav__wrapper">
            <div className="nav__logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="nav__list">
               <a href="#" className="nav__list-item">Features</a>
               <a href="#" className="nav__list-item">Team</a>
               <a href="#" className="nav__list-item">Sign In</a>
            </div>
        </div>
    </header>
  )
}

export default Nav
import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="Logo" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Admissions</li>
            <li>Academics</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar

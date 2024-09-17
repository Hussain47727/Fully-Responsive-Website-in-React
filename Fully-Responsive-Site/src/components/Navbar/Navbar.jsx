import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {

  const [sticky, setSticky]

  return (
    <nav className='container dark-nav'>
      <img src={Logo} alt="" className='Logo' />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Program</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar

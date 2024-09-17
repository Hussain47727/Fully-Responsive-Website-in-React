import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {

  const [sticky, setSticky] = useState();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  })



  return (
    <nav className= {`container ${sticky ? 'dark-nav' : ''}`}>
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

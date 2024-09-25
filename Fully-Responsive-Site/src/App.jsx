import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/About/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <Title subTitle = 'Our Program' title = 'What we offer'/>
      <Programs />   
      <About />   
      <Title subTitle = 'Gallery' title = 'Campus Photos'/>
      <Campus />
      <Title subTitle = 'TESTIMONIALS' title = 'What Students Says'/>
      <Testimonials />
      <Title subTitle = 'Contact Us' title = 'Getting Touch'/>
      <Contact /> 
      <Testimonials />
      <Title subTitle = 'Contact Us' title = 'Getting Touch'/>
      <Contact /> 
      
      
      
      </div>
    </div>
  )
}

export default App

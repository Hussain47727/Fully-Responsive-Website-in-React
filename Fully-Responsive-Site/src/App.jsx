import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/About/About'
import Campus from './components/campus/Campus'

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
      </div>
    </div>
  )
}

export default App

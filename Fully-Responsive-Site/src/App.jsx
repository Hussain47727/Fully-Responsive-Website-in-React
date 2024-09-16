import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <Programs />
      </div>
    </div>
  )
}

export default App

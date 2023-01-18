import React from 'react'
import { NavBar } from './components'
import { About, Footer, Header, Skill, Testimonial, Work } from './containers'

import './App.scss';

const App = () => {
  return (
    <div className='app'>
    <NavBar />
      <Header />
      <About />
      <Work />
      <Skill />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App

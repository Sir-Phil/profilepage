import React from 'react'
import { NavBar } from './components'
import { About, Header, Skill, Testimonial, Work } from './containers'

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
    </div>
  )
}

export default App

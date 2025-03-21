import React from 'react'
import Hero from "./Hero"
import Footer from "./Footer"
import About from "./About"
import Projects from "./Projects"
import TechStack from './TechStack'

function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <About />
      <TechStack />
      <Footer />
    </div>
  )
}

export default Home


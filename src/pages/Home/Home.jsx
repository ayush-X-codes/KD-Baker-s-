import React from 'react'
import Hero from './sections/Hero'
import Features from './sections/Features'
import CTA from './sections/CTA'
import "./Home.css"
import AboutSection from './sections/About'
import Items from './sections/Items'
import Testimonials from './sections/Testimonials'

const Home = () => {
  return (
    <div className='page'>
      <Hero/>
      <Items/>
      <AboutSection/>
      <Features/>
      <Testimonials/>
      <CTA/>
    </div>
  )
}

export default Home



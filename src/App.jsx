import React from 'react'
import NavBar from './Components/NavBar.jsx'
import './index.css'
import Hero from './Components/Hero.jsx'
import Features from './Components/Features.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Services from './Components/Services.jsx'
import Title from './Components/Title.jsx'
import Section from './Components/Section.jsx'
// import TestimonialSection from './Components/TestimonialSection.jsx'
import Footer from './Components/Footer.jsx'

function App() {

  return (
    <>
      <NavBar />
      <Hero/>
      <Features/>
      {/* <Title firrstline="Our Services"/> */}
      <AboutUs/>
      <Services/>
      <Section/>
      {/* <TestimonialSection/> */}
      <Footer/>
      </>
  )
}

export default App

import React, { useState, useEffect, useCallback } from 'react'
import NavBar from './Components/NavBar.jsx'
import './index.css'
import Hero from './Components/Hero.jsx'
import Features from './Components/Features.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Services from './Components/Services.jsx'
import Section from './Components/Section.jsx'
// import TestimonialSection from './Components/TestimonialSection.jsx'
import Footer from './Components/Footer.jsx'
import FAQSection from './Components/FAQSection.jsx'
import ContactUs from './Components/ContactUs.jsx'
import ServicesPage from './Components/ServicesPage.jsx'

const getPageFromHash = () => (window.location.hash.startsWith('#/services') ? 'services' : 'home')

function App() {
  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    const onHashChange = () => setPage(getPageFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = useCallback((target, sectionId) => {
    const targetHash = target === 'services' ? '#/services' : '#/'
    const isPageSwitch = getPageFromHash() !== target
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash)
      setPage(target)
    }
    if (sectionId) {
      const tryScroll = () => {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
      isPageSwitch ? setTimeout(tryScroll, 60) : tryScroll()
    } else if (isPageSwitch) {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    }
  }, [])

  return (
    <>
      <NavBar onNavigate={navigate} currentPage={page} />
      {page === 'services' ? (
        <ServicesPage onNavigate={navigate} />
      ) : (
        <>
          <Hero />
          {/* <Title firrstline="Our Services"/> */}
          <Features />
          <AboutUs />
          <Services />
          <Section />
          <ContactUs />
          {/* <TestimonialSection/> */}
          <FAQSection />
        </>
      )}
      <Footer />
    </>
  )
}

export default App

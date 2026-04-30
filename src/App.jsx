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
import Reveal from './Components/Reveal.jsx'

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
          <Reveal><Features /></Reveal>
          <Reveal><AboutUs /></Reveal>
          <Reveal><Services onNavigate={navigate} /></Reveal>
          <Reveal variant="zoom"><Section /></Reveal>
          <Reveal><ContactUs /></Reveal>
          {/* <TestimonialSection/> */}
          <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Reveal variant="left" className="md:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80&auto=format&fit=crop"
                  alt="Compassionate healthcare professional"
                  loading="lazy"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-500"
                />
              </Reveal>
              <Reveal variant="right" delay={150}>
                <img
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80&auto=format&fit=crop"
                  alt="Caring for the elderly at home"
                  loading="lazy"
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-500"
                />
              </Reveal>
            </div>
          </section>
          <Reveal><FAQSection /></Reveal>
        </>
      )}
      <Footer />
    </>
  )
}

export default App

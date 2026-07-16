import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Industries from './components/Industries'
import Features from './components/Features'
import Trust from './components/Trust'
import Advantage from './components/Advantage'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Products />
        <Industries />
        <Features />
        <Advantage />
        <Trust />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

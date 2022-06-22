import React from 'react'
import AboutCard from '../about/AboutCard'
import Footer from '../footer/Footer'
import Header from '../heading/Header'
import HAbout from './HAbout'
import Hblog from './Hblog'
import Hero from './hero/Hero'
import Hprice from './Hprice'
import Testimonial from './testimonial/Testimonial'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonial />
      <Hblog />
      <Hprice />
      <Footer />
    </>
  )
}

export default Home
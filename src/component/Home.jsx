import React from 'react'
import Hero from './hero/Hero'
import Steps from './step/Steps'
import About from './about/About'
import Feature from './feature/Feature'
import Services from './services/Services'
import Content from './content/Content'
import SeoText from './seoText/SeoText'
import Review from './review/Review'
import Faq from './faq/Faq'
import Contact from './contact/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Steps  />
      <About />
      <Feature />
      <Services />
      <Content />
      <SeoText />
      <Review />
      <Faq />
      <Contact />
    </>
  )
}

export default Home

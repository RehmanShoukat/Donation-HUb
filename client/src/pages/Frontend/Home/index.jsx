import React from 'react'
import Hero from './Hero'
import Choose from './Choose'
import Testimonials from '../../../components/Testimonial'
import Subscribe from '../../../components/Subscribe'
import Impact from './Impact'
import HowItWorks from './HowItWorks'
import CTA from './CTA'
import MiddleSection from './MiddleSection'
import BlogSection from '../../../components/BlogSection'

const Home = () => {
  return (
    <>
     <Hero/> 
     <MiddleSection/>
     <Impact/>
     <Choose/>
     <Subscribe/>
     <Testimonials/>
     <CTA/>
     <HowItWorks/>
     <BlogSection/>
    </>
  )
}

export default Home

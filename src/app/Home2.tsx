import AboutSection from '@/components/Aboutus'
import Hero from '@/components/Hero'
import Section2 from '@/components/Section2'
import ServicesSection from '@/components/ServicesSection'

import ServiceOfferSection from "@/components/ServiceOfferSection";
import React from 'react'
import FeaturedService from '@/components/FeaturedService'
import BrandsSection from '@/components/BrandsSection'
import LatestBlogs from '@/components/LatestBlogs'

function Home2() {
  return (
    <>
      <Hero/>
      <Section2/>
      <AboutSection/>
      <ServicesSection/>
      <ServiceOfferSection/>
      <FeaturedService/>
      <BrandsSection/>
      <LatestBlogs/>
    </>
  )
}

export default Home2

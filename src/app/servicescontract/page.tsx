import ServiceOfferSection from '@/components/ServiceOfferSection'
import ServicesSection1 from '@/components/ServicesSection1'
import ServicesSection2 from '@/components/ServicesSection2'
import React from 'react'

function services() {
  return (
    <div>
      <ServicesSection1/>
      <ServicesSection2/>
     <ServiceOfferSection/>
    </div>
  )
}

export default services

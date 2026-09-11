import BrandsSection from '@/components/BrandsSection2'
import ExpertCallSection from '@/components/ExpertCallSection'
import GearboxHero from '@/components/GearboxHero'
import GearboxServices from '@/components/GearboxServices'
import GearboxSection from '@/components/GSection'
import React from 'react'

function GearBox() {
  return (
    <div>

         <ExpertCallSection
        title="Gearbox and Transmission Repair in Dubai"
        phoneNumber="+971 58 177 5588"
        backgroundImage="/G1.jpg"
      />
         <GearboxSection/>
        <GearboxHero
      title="Need A Professional"
      highlight="Gearbox Repair Near Me?"
      description="My Fast Car Auto Care Offers Best Gearbox / Transmission Repair Service in Dubai."
      phone="+9710000000"
      buttonText="Get Appointment"
      image="/images/gearbox-car.png"
    />
         <GearboxServices/>
         <BrandsSection/>
    </div>
  )
}

export default GearBox

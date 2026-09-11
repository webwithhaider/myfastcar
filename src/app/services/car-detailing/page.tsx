import BrandsSection from '@/components/BrandsSection2'
import EngineRepairSection from '@/components/EngineRepairSection'
import ExpertCallSection from '@/components/ExpertCallSection'
import GearboxHero from '@/components/GearboxHero'
import React from 'react'

function page() {
  return (
    <div>
      <ExpertCallSection
              title="Luxury Car Detailing Service in Dubai"
              phoneNumber="+971 58 177 5588"
              backgroundImage="/B.png"
            />
               <EngineRepairSection
            title="Car Engine Repair Dubai : My Fast Car Auto Care"
            description1="My Fast Car Auto Care guarantees the repair of any car engine..."
            description2="Certified technicians experienced in engine & gearbox rebuilds..."
            image="/ppf.jpg"
            services={[
              "Paint protection using a clay bar detailer.",
              "Painting and disinfection are being done.",
              "Paint scratch removal of the highest quality.",
              "Cleaning of all tires and rims.",
              "Cleaning of carpets and floor mats"

            ]}
          />
            <GearboxHero
            title="Need A Professional"
            highlight="Engine Repair Near me"
            description="My Fast Car Care Offers Best Gearbox / Transmission Repair Service in Dubai."
            phone="+9710000000"
            buttonText="Get Appointment"
            image="/images/gearbox-car.png"
          />
          <BrandsSection/>
         
          
    </div>
  )
}

export default page

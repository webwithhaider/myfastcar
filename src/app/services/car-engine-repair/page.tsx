import BrandsSection from '@/components/BrandsSection2'
import EngineRepairSection from '@/components/EngineRepairSection'
import ExpertCallSection from '@/components/ExpertCallSection'
import GearboxHero from '@/components/GearboxHero'
import React from 'react'

function page() {
  return (
    <div>
      <ExpertCallSection
        title="Car Engine Repair Services"
        phoneNumber="+971 58 177 5588"
        backgroundImage="/E2.webp"
      />
         <EngineRepairSection
      title="Car Engine Repair Dubai : Protone Auto Care"
      description1="Protone guarantees the repair of any car engine..."
      description2="Certified technicians experienced in engine & gearbox rebuilds..."
      image="/E3.webp"
      services={[
        "Engine Fuel Pump Issue",
        "Engine Management Lights On",
        "Misfire In Engine Repair",
        "Cambelts & Timing Belts Service"
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
      <EngineRepairSection
      title="Engine Oil Changes and Oil Pumps"
      description1="We at Protone Auto Center have skilled specialists and cutting-edge equipment to repair engine oil leaking problems and provide Oil Pumps Services in Dubai. Bring your car to our Auto Workshop Dubai if your oil pump isn’t working correctly. We have a specialised engine rebuilding and repair staff that guarantees to handle any engine oil pump issues."
      description2=""
      image="/E4.webp"
      services={[
        "Engine Fuel Pump Issue",
        "Engine Management Lights On",
        "Misfire In Engine Repair",
        "Cambelts & Timing Belts Service"
      ]}
    />
      <EngineRepairSection
      title="Engine Overheating"
      description1="For car engine repair in Dubai , consult specialists at Protone Car Garage dubai. They will accurately identify and resolve the issue quickly and affordably. Their specialists will overhaul your engine overheating and make it road-ready using cutting-edge tools and technology."
      description2=""
      image="/E2.webp"
      services={[
        "Engine Fuel Pump Issue",
        "Engine Management Lights On",
        "Misfire In Engine Repair",
        "Cambelts & Timing Belts Service"
      ]}
    />
    </div>
  )
}

export default page

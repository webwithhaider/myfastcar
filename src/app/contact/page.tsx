import ConsultationSection from '@/components/ConsultationSection';
import ExpertCallSection from '@/components/ExpertCallSection';

import React from 'react'

function Contactus() {
  return (
    <div>
         <ExpertCallSection
        title="Talk to Our Experts Now!"
        phoneNumber="+971 58 177 5588"
        backgroundImage="/contactusbg.jpg"
      />
<ConsultationSection/>
    </div>
  )
}

export default Contactus

import React from 'react'
import Services from './Services.jsx'
import Star from '../components/ReusableComponent/Star.jsx'

function Expertise() {
    return (
        <div className='container mx-auto mt-20 mb-15 text-center max-w-screen-xl'>
            <div className='flex items-center gap-2'>
                <Star text="Expertise"/>
            </div>
           
                <Services />
          
        </div>
        
    )
}

export default Expertise

import React from 'react'

import HeroImage from "../../assets/images/hero.png"

const Hero = () => {
  return (
    <div className='d-flex justify-content-center'>
      <img src={HeroImage} className="img-fluid" alt="Hero Image" />
    </div>
  )
}

export default Hero
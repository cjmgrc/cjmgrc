import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Faith in Action, Knowledge for Life.</h1>
            <p>San Miguel Catholic University bridges timeless Catholic values with modern, 
                tech-driven education. Grounded in the spirit of St. Michael the Archangel, 
                SMCU empowers students to put faith into action through community service and 
                ethical leadership, while acquiring practical knowledge 
                for life across cutting-edge fields like technology, business, and design.</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="Arrow" /></button>
        </div>
      
    </div>
  )
}

export default Hero

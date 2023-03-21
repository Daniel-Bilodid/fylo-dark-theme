import React from 'react'
import './about.scss'
import aboutImg from '../../assets/images/illustration-intro.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about__wrapper">
            <div className="about__img">
                <img src={aboutImg} alt="aboutImg" />
            </div>
            <h1>test</h1>
            <div className="about__title">
            <div>All your files in one secure location, accessible anywhere.</div>
            </div>  
            <div className="about__descr">
            Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
            </div>
            
            <div className="about__btn">
                <button>Get Started</button>
            </div>
        </div>
      
    </div>
  )
}

export default About
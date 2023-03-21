import React from 'react'
import './testimonials.scss'
import testimonalsPhoto from '../../assets/images/profile1.svg'
import testimonalsPhoto2 from '../../assets/images/profile2.png'
import testimonalsPhoto3 from '../../assets/images/profile3.png'

const Testimonials = () => {
  return (
    <div className="testimonials">
        
        <div className="testimonials__wrapper">
       
            <div className="testimonials__card holder">
            
                <div className="testimonials__card-descr">
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                </div>

                <div className="testimonials__card-wrapper">
                    <div className="testimonials__card-img">
                        <img src={testimonalsPhoto} alt="testimonalsPhoto" />
                    </div>
                    <div className="testimonials__card-info">
                        <div className="testimonials__card-name">
                        Satish Patel
                        </div>
                        <div className="testimonials__card-job">
                        Founder & CEO, Huddle
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials__card">
                <div className="testimonials__card-descr">
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                </div>

                <div className="testimonials__card-wrapper">
                    <div className="testimonials__card-img">
                        <img src={testimonalsPhoto2} alt="testimonalsPhoto" />
                    </div>
                    <div className="testimonials__card-info">
                        <div className="testimonials__card-name">
                        Bruce McKenzie
                        </div>
                        <div className="testimonials__card-job">
                        Founder & CEO, Huddle
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials__card">
                <div className="testimonials__card-descr">
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                </div>

                <div className="testimonials__card-wrapper">

                    <div className="testimonials__card-img">
                        <img src={testimonalsPhoto3} alt="testimonalsPhoto" />
                    </div>
                    <div className="testimonials__card-info">
                        <div className="testimonials__card-name">
                        Iva Boyd
                        </div>
                        <div className="testimonials__card-job">
                        Founder & CEO, Huddle
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
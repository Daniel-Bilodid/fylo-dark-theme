import React from 'react'
import './footer.scss'
import logo from '../../assets/icons/logo.svg'
import location from '../../assets/icons/icon-location.svg'
import phone from '../../assets/icons/icon-phone.svg'
import email from '../../assets/icons/icon-email.svg'

import {RiFacebookFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'



const Footer = () => {
  return (
    <div className='footer'>
            <img src={logo} alt="logo" className="footer__logo" />
      <div className="footer__wrapper">

      
          <div className="footer__position">
            <div className="footer__position-icon">
              <img src={location} alt="location" />
            </div>
            <div className="footer__position-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </div>

          <div className="footer__contact">
            <div className="footer__phone">
              <img src={phone} className='footer__phone-img' alt="phone" />
              <div className="footer__phone-number">
                <a href="tel:+1-543-123-4567">+1-543-123-4567</a>
              </div>
            </div>
            <div className="footer__email">
              
                <img src={email} alt="email" className="footer__email-img" />
                <div className="footer__email-link">
                example@fylo.com
                </div>
            </div>
          </div>


          <div className="footer__list">
            <ul className='footer__list-wrapper'>
              <li className="footer__list-item">About Us</li>
              <li className="footer__list-item">Jobs</li>
              <li className="footer__list-item">Press</li>
              <li className="footer__list-item">Blog</li>
            </ul>

            <ul>
              <li className="footer__list-item">Contact Us</li>
              <li className="footer__list-item">Terms</li>
              <li className="footer__list-item">Privacy</li>
            </ul>
          </div>

          <div className="footer__social">
            <div className="footer__social-body">
              <div className="footer__social-img">
              <RiFacebookFill color='white' />
              </div>
            </div>
            <div className="footer__social-body">
            <div className="footer__social-img">
              <BsTwitter color='white'/>
              </div>
            </div>
            <div className="footer__social-body">
            <div className="footer__social-img">
              <GrInstagram color='white' />
              </div>
            </div>
          </div>
        </div>
      </div>
  
  )
}

export default Footer
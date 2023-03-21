import React from 'react'
import productiveImg from '../../assets/images/illustration-stay-productive.png'
import arrow from '../../assets/icons/icon-arrow.svg'
import './productive.scss'
const Productive = () => {
  return (
    <div className="productive">
      <div className="productive__wrapper">
        <div className="productive__img">
            <img src={productiveImg} alt="productiveImg" />
        </div>
        <div className="productive__info-wrapper">
        <div className="productive__title">
          Stay productive, 
          wherever you are
        </div>
        <div className="productive__descr">
        Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
        <br />
        <br />
        Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
        </div>
        <div className="productive__link">
          <a href="#">See how Fylo works</a>
          <img src={arrow} alt="arrow" />
          
        </div>
        </div>
      </div>
    </div>
  )
}

export default Productive
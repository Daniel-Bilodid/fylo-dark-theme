import React from 'react'
import './info.scss'
import Anywhere from '../../assets/icons/icon-access-anywhere.svg'
import Security from '../../assets/icons/icon-security.svg'
import Colaboration from '../../assets/icons/icon-collaboration.svg'
import File from '../../assets/icons/icon-any-file.svg'


const Info = () => {
  return (
    <div className="info">
        <div className="info__wrapper">

            <div className="info__card-wrapper">
            <div className="info__card">
                <div className="info__card-img">
                    <img src={Anywhere} alt="anywhereImg" />
                </div>
                <div className="info__card-title">
                Access your files, anywhere
                </div>
                <div className="info__card-descr">
                The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.
                </div>
            </div>
            </div>

            <div className="info__card-wrapper">
            <div className="info__card">
                <div className="info__card-img">
                <img src={Colaboration} alt="colaborationImg" />
                </div>
                <div className="info__card-title">
                Real-time collaboration
                </div>
                <div className="info__card-descr">
                Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.

                </div>
            </div>
            </div>

            <div className="info__card-wrapper">
            <div className="info__card">
                <div className="info__card-img">
                
                    <img src={Security} alt="securityImg" />
                </div>
                <div className="info__card-title">
             
                Security you can trust
                </div>
                <div className="info__card-descr">
   
                2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.
                </div>
            </div>
            </div>

            <div className="info__card-wrapper">
            <div className="info__card">
                <div className="info__card-img file">
                    <img src={File} alt="fileImg" />
                </div>
                <div className="info__card-title">
                Store any type of file
                </div>
                <div className="info__card-descr">
                Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
                </div>
            </div>
            </div>

           
        </div>
    </div>
  )
}

export default Info
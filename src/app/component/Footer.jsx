import React from 'react'
import style from '../style/style.module.css'

function Footer() {
  return (
    <div className={`${style.footer} container-fluid`}>
      <div className="col-12 row py-5 mx-5">
        <div className="col-3">
          <h1 className="text-light">Dhameliya Kidney Hospital</h1>
          <p className="text-light fs-5">Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology, </p>
          <img src="/Group 2.png" alt="" />
        </div>
        <div className="col-3">
          <h1 className="text-light">Get in Touch</h1>
          <p className="text-light fs-5">If you have any questions or need help, feel free to contact with our team.</p>
          <img src="/Group 1171275107.png" alt="" />
          <img className={`${style.bgw} ms-1 mt-3`} src="/location.png" alt="" />
          <p className="text-light fs-5">402, Aayush Doctor House, Lal Darwaja, Station Road, SURAT 395002 - GUJ INDIA</p>
          <h5 className="text-light">OTHER BRANCHES</h5>
          <h5 className="text-light">GET DIRECTION</h5>
        </div>
        <div className="col-3">
          <h1 className="text-light ms-4">Medical Service</h1>
          <ul>
            <li className="text-light fs-5">Kidney Stone</li>
            <li className="text-light fs-5">Prostate</li>
            <li className="text-light fs-5">Uro Oncology</li>
            <li className="text-light fs-5">Paediatric Urology</li>
            <li className="text-light fs-5">Female Urology</li>
          </ul>
        </div>
        <div className="col-3">
          <h1 className="text-light ms-4">Quick Links</h1>
          <ul>
            <li className="text-light fs-5">Home</li>
            <li className="text-light fs-5">About us</li>
            <li className="text-light fs-5">Medical Services</li>
            <li className="text-light fs-5">Testimonials</li>
            <li className="text-light fs-5">Contact us</li>
          </ul>
        </div>
      </div>
      <div className="col-12 text-center">
          <img className={style.ml} src="/Line 1.png" alt="" />
          <h3 className=" py-4 text-light">Non Copyrighted © 2022 Design and upload by Dhameliya Kidney Hospital</h3>
      </div>
    </div>
  )
}

export default Footer
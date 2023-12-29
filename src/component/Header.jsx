import React from 'react'
import style from '../style/style.module.css'

function Header() {
  return (
    <div className={`${style.bgc} container-fluid mt-2 sticky-top`}>
      <div className="container">
        <div className="d-flex justify-content-between pt-1">
          <div className={`${style.logo} d-flex`}>
            <img src="/logo770 1.png" alt="" />
            <p className='fs-5 fw-bold'>Dhameliya  <br />Kidney Hospital</p>
          </div>
          <div className="menu">
            <ul className="d-flex align-item-center">
              <li className="fs-5 fw-semibold m-3">Home</li>
              <li className="fs-5 fw-semibold m-3">About</li>
              <li className="fs-5 fw-semibold m-3">Madical service</li>
              <li className="fs-5 fw-semibold m-3">Career</li>
              <li className="fs-5 fw-semibold m-3">Contact us</li>
              <li className="fs-5 fw-semibold m-3">News</li>
            </ul>
          </div>
          <div className='d-flex button m-2'>
            <img src="/profile-circle.png" className={`${style.layout} mt-2 me-2`} alt="" />
            <p className={`${style.backcolor} ${style.textcolor}`}>Make Appointment</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
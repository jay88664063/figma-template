import React from 'react'
import style from '../style/style.module.css'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <div className={`${style.bgc} container-fluid mt-2 sticky-top`}>

      <div className="d-flex justify-content-evenly pt-1">
        <div className={`${style.logo} d-flex`}>
          <img src="/logo770 1.png" alt="" />
          <p className='fs-5 fw-bold'>Dhameliya  <br />Kidney Hospital</p>
        </div>
        <div className="menu">
          <ul className="d-flex align-item-center mt-3">
            <li><Link href={"/"} className="fs-4 fw-bold px-3 text-dark">Home</Link></li>
            <li><Link href={'/about'} className="fs-4 fw-bold px-3 text-dark">About</Link></li>
            <li><Link href={'/medical'} className="fs-4 fw-bold px-3 text-dark">Madical service</Link></li>
            <li><Link href={'/career'} className="fs-4 fw-bold px-3 text-dark">Career</Link></li>
            <li><Link href={'/contactus'} className="fs-4 fw-bold px-3 text-dark">Contact us</Link></li>
            <li><Link href={"/"} className="fs-4 fw-bold px-3 text-dark">News</Link></li>
          </ul>
        </div>
        <div className='d-flex button m-2'>
          <img src="/profile-circle.png" className={`${style.layout} mt-2 me-2`} alt="" />
          <p className={`${style.backcolor} ${style.textcolor}`}>Make Appointment</p>
        </div>
      </div>
    </div>
  )
}

export default Header
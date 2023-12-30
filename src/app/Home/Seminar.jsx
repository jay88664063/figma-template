import React from 'react'
import style from '../style/style.module.css'

const Seminar = () => {
    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className="col-12 row align-items-center py-5">
                    <div className="col-6">
                        <img src="/cs.jpg.png" alt="" />
                    </div>
                    <div className="col-6">
                        <h2 className={style.title4}>CONTACT US</h2>
                        <h3 className={`${style.peraa}`}>True <span className={`${style.span1} fw-bold`}>Healthcare </span>For Your Family!</h3>
                        <p className={`${style.justify} fs-5`}>Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology, world class expertise and outstanding personalized care</p>
                        <p className='fs-4 fw-bold'>Our support services inclide:</p>
                        <div className="row">
                            <div className="col-6 ul">
                                <li className='fs-4'>ESWL - Lithotripsl</li>
                                <li className='fs-4'>Cystolitholapaxy</li>
                                <li className='fs-4'>HOLEP</li>
                            </div>
                            <div className="col-6 ul">
                                <li className='fs-4'>Endoscopic surgery</li>
                                <li className='fs-4'>Open surgery</li>
                                <li className='fs-4'></li>
                            </div>
                        </div>
                        <p className='fs-5 py-2'>Contact us today to learn more about our support services and to find out how we can help you.</p>
                        <button className={style.buttonbg1}>Read more<span className='text-light'><i className="fa-solid fa-arrow-right"></i></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seminar
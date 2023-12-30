
import React from 'react'
import style from "../style/style.module.css"
import { Rubik } from "next/font/google"

const rubik = Rubik(
    {
        subsets: ['latin'],
        weight: "500"
    }

)
const Mainbaner = () => {
    return (
        <div className='mt-1'>
            <div className={`${style.bgc} container-fluid`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6 mt-3">
                            <h1 className={`${style.typo} fw-bold ms-1`}>Find the <span className={style.span1}>good</span>life by <br /> good health</h1>
                            <p className={`${rubik.className} fs-4 py-4 ms-2`}>Dhameliya Kidney Hospital has born out of the need for a good centre which catered to patients with complicated kidney diseases in Surat.</p>
                            <div className="d-flex">
                                <div className="col-3">
                                    <div className='text-center mx-2'>
                                        <button className={`${style.buttonbg} fs-5 fw-semibold`}>Get Appointment</button>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className='text-center'>
                                        <button className={`${style.buttonbg} fs-5 mt-2`}>Learn More</button>
                                    </div>
                                </div>
                                <div className="col-3 mt-5">
                                    <div className='text-center'>
                                        <img src="/image 50 (Traced) (1).png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='ms-4 mt-1'>
                                <img src="/image 203.png" className={`${style.toolimg5} ${style.bgstyle1}`} alt="" />
                            </div>
                        </div>

                        <div className="col-6 mt-3">
                            <div className="d-flex">
                                <div className="col-6">
                                    <div className='row'>
                                        <div className="col-6">
                                            <div className="ms-4">
                                                <img src="/6578155 1.png" className={`${style.toolimg} ${style.bgstyle}`} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className=''>
                                                <img src="/8791974 1.png" className={`${style.toolimg} ${style.bgstyle}`} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className='ms-4 mt-1'>
                                            <img src="/portrait-smiling-handsome-male-doctor-man 3 (2).png" className={`${style.toolimg2} ${style.bgstyle}`} alt="" />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6">
                                            <div className="ms-4">
                                                <img src="/6578155 1.png" className={`${style.toolimg} ${style.bgstyle}  mt-2`} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className=''>
                                                <img src="/8791974 1.png" className={`${style.toolimg} ${style.bgstyle}  mt-2`} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className=''>
                                        <img src="/female-doctor-hospital-with-stethoscope.png" className={`${style.toolimg3} ${style.bgstyle}`} alt="" />
                                    </div>
                                    <div className=''>
                                        <img src="/Rectangle 4349.png" className={`${style.toolimg4} mt-3`} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainbaner
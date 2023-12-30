import React from 'react'
import style from "../style/style.module.css"
import News from '../component/News'
import Img from '../component/Img'

const page = () => {
    return (
        <div className={`${style.bgc} container-fluid`}>
            <div className="container">
                <div className="col-12">
                    
                    <Img/>

                    <div className={`${``} d-flex text-center`}>
                        <div className={`${``} py-5`}>
                            <img src="about-one-img-1.jpg.png" alt="" />
                        </div>
                        <div className={`${style.card1} px-4 py-4`}>
                            <h1 className={style.title5}>About hospital</h1>
                            <h2 className={`${style.peraa1} py-3`}>Super <span className={`${style.span1} fw-bold me-2`}>Speciality</span>Hospital Of South Gujarat.</h2>
                            <p className={`${style.tj} fs-5 pt-2`}>Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology, world class expertise and outstanding personalized care. With time it has become best kidney hospital in SURAT. Hospital with all facilities under one roof provides for greater efficiency in meeting the overall needs of a patient.</p>
                            <p className={`${style.tj} fs-5`}>
                                patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology</p>
                            <div className='text-center'>
                                <button className={style.buttonbg1}>Read more</button>
                            </div>
                        </div>
                        <div className={`${``} py-5`}>
                            <img src="about-one-img-1.jpg (1).png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="mt-5 mb-5 col-12 row">
                    <div className="col-6">
                        <div className="">
                            <h1 className={style.title6}>About doctor</h1>
                            <h3 className={`${style.peraa2} py-3`}>Improving <span className={`${style.span1} fw-bold me-2`}>The Quality Of</span> Your Life Through Better Health.</h3>
                            <h3 className="fs-3 fw-semibold">Our support services inclide</h3>
                            <p className={`${style.tj} fs-5`}>Completed mbbs in 1998 from B.J. Medical College, Ahmedabad. Completed M.S. General Surgery in 2003 from Shardaben Hospital, Ahemdabad. He was the only student of Gujarat who selected for m.c.h study in 2004 and completed that in 2007.</p>
                            <h4 className={`${style.tj} fs-3 fw-semibold`}>Professional Experience</h4>
                            <p className='fs-5'>He started private practice in Surgical Urology at Surat in 2007 at Dhameliya Kidney Hospital. He is also giving his service to the PATEL KIDNEY HOSPITAL which is a trust hospital in Surat He is visiting doctor in many of hospital in Surat. (E.g. Mahavir hospital,BAPS hospital, Unique hospital, Apple hospital).</p>
                            <p className={`${style.tj} fs-5`}>He had presented papers on laparoscopic radical prostatectomy and laparoscopic radical cystectomy at Goa, Mahesana, Patna, Mumbai and Ahmedabad.</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="div">
                            <img src="/Group 1171275139.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className='mx-5 text-center'>
                        <h1 className={style.title4}>Facility</h1>
                        <h2 className={`${style.peraa} fw-bold`}>Cashless Facility</h2>
                        <img src="Group 1171275292.png" alt="" />
                        <button className={`${style.buttonbg3} fw-bold mt-4`}>view more</button>
                    </div>
                    <div className="text-center mt-5">
                        <img src="Group 1171275303.png" className='m-auto' alt="" />
                    </div>
                    <div>
                        <img src="Doctoe team.png" alt="" />
                    </div>
                    <News/>
                </div>
            </div>
        </div>
    )
}

export default page


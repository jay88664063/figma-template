import React from 'react'
import style from '../style/style.module.css'

const Baner = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-6">
                    <div className='mt-5'>
                        <h4 className={`${style.img6} text-center`}>about company</h4>
                        <img src="/about-one-img-1.jpg.png" alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <div className='mt-5'>
                        <h4 className={style.heading}>About hospital</h4>
                        <p className={style.title}>Super Speciality Hospital Of South Gujarat.</p>
                        <p className={style.pera}>Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology, world class expertise and outstanding personalized care. With time it has become best kidney hospital in SURAT. Hospital with all facilities under one roof provides for greater efficiency in meeting the overall needs of a patient.</p>
                        <p className={style.pera}>patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology</p>
                      <button className={style.buttonbg1}>Read more<span className='text-light'><i className="fa-solid fa-arrow-right"></i></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baner;
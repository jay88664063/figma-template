import React from 'react'
import style from '../style/style.module.css'

const Profile = () => {
    return (
        <div className='container-fluid pb-5'>
            <div className="container">
                <div className="col-12 d-flex align-items-center">

                    <div className="col-6 mt-5">
                        <h1 className={`${style.title3} pt-5`}>OUR DOCTOR</h1>
                        <p className={`${style.peraa} pt-3`}>Meet Our Professional <span className={`${style.span1} fw-bold`}>Expert Doctor</span></p>
                        <div className={`${style.cad1} ${style.relative} text-end py-5 px-4 mt-5`}>
                            <div className={style.absolute}>
                                <img src="/portrait-smiling-handsome-male-doctor-man 3 (2).png" className={`${style.toolimg6}`} alt="" />
                            </div>
                            <h1 className='text-light fs-3'>Dr.Christopher Nicks</h1>
                            <h3 className='text-light fs-4'>MBBS,FCPS - Cardiologist</h3>
                            <button className={`${style.buttonbg2} mt-3`}>Learn more</button>
                        </div>
                    </div>

                    <div className="col-6 row">
                        <div className={`${style.cad1} ${style.relative} text-end py-5 px-4`}>
                            <div className={style.absolute}>
                                <img src="/jay.png" className={`${style.toolimg6}`} alt="" />
                            </div>
                            <h1 className='text-light fs-3'>Dr.Christopher Nicks</h1>
                            <h3 className='text-light fs-4'>MBBS,FCPS - Cardiologist</h3>
                            <button className={`${style.buttonbg2} mt-3`}>Learn more</button>
                        </div>
                        <div className='mt-5 px-5'>
                            <h1 className={style.title3}>OUR DOCTOR</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
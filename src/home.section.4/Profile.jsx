import React from 'react'
import style from '../style/style.module.css'

const Profile = () => {
    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="col-12 d-flex align-items-center">
                    <div className="col-6 mt-5">
                        <h1 className={`${style.title3} pt-5`}>OUR DOCTOR</h1>
                        <p className={`${style.peraa} pt-5`}>Meet Our Professional <span className={`${style.span1} fw-bold`}>Expert Doctor</span></p>
                        <div className={style.position}>
                            <img src="/portrait-smiling-handsome-male-doctor-man 3 (2).png" className={`${style.toolimg6}`} alt="" />
                        </div>
                        <div className={`${style.cad1} text-end py-5 px-2`}>
                            <h1 className='text-light fs-3'>Dr.Christopher Nicks</h1>
                            <h3 className='text-light fs-4'>MBBS,FCPS - Cardiologist</h3>
                            <button className={`${style.buttonbg2} mt-3`}>Learn more</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className={`${style.cad1} text-center py-5`}>
                            <h1 className='text-light'>Dr.Christopher Nicks</h1>
                            <h3 className='text-light'>MBBS,FCPS - Cardiologist</h3>
                            <button className={`${style.buttonbg2}`}>Learn more</button>
                            <h4 className='text-light mt-4'>OUR DOCTOR</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
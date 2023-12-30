import React from 'react'
import style from '../style/style.module.css'

const Review = () => {
    return (
        <div className={`${style.bgc} container-fluid mt-5`}>
            <div className="container">
                <div className="col-12 py-4">
                    <h1 className={`${style.title3} fs-2 text-center`}>testimonia</h1>
                    <h2 className={`${style.peraa} text-center fw-bold`}>What Our <span className={`${style.span1} fw-bold`}>Patient</span> Says</h2>
                    <div className="row ms-5">
                        <div className="col-4">
                            <div className='px-5'>
                                <img src="/Ellipse 229.png" alt="" />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='px-5'>
                                <img src="/Ellipse 229 (1).png" alt="" />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='px-5'>
                                <img src="/Ellipse 230.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <h2 className='text-center fs-3 fw-bold py-4'>Raymond Galario</h2>
                    <p className='text-center fs-3'>Now you can make an appointment with your doctor anywhere and anytime via online booking easier. Now you can make an appointment with your doctor anywhere and anytime via online booking easier.</p>
                </div>
            </div>
        </div>
    )
}

export default Review;
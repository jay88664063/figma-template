import React from 'react'
import style from '../style/style.module.css'
import Img from '../component/Img'
import News from '../component/News'

const page = () => {
    return (
        <div className='container-fluid'>
            <div className="container">

                <Img />

                <div className="col-12 mx-4 row">
                    <div className="col-6">
                        <div className="">
                            <h1 className={style.title4}>CAREER</h1>
                            <h2 className={style.peraa}>Leave A Message</h2>
                            <p className={`${style.tj} fs-5`}>Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology, world class expertise and outstanding personalized care. With time it has become best kidney hospital in SURAT. Hospital with all facilities under one roof provides for greater efficiency in meeting the overall needs of a patient.</p>
                        </div>
                        <div className={`${style.card3} pt-5 px-4`}>
                            <h1 className={`${style.title4}`}>LOGIN</h1>
                            <input className={`${style.input}`} type="text" name="name" placeholder="enter your name" />
                            <input className={`${style.input}`} type="text" name="email" placeholder="enter your email" />
                            <input className={`${style.input}`} type="text" name="number" placeholder="enter your number" />
                            <input className={`${style.input}`} type="text" name="text" placeholder="enter your desgnation" />
                            <input className={`${style.input}`} type="text" name="text" placeholder="enter your experience" />
                            <input className={`${style.input}`} type="text" name="text" placeholder="choose file" />
                            <textarea rows="4" cols="50" name="comment" form="usrform">
                                Enter text here...</textarea>
                            <button className={style.buttonbg1}>Read more</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <img src="/about-one-img-1.jpg (2).png" alt="" />
                        </div>
                    </div>
                </div>
                <News />
            </div>
        </div>
    )
}

export default page
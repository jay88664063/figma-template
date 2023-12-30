import React from 'react'
import style from '../style/style.module.css'

const News = () => {
    return (
        <div className='container-fluid'>
            <div className="container mt-3 mb-3">
                <div className={`${style.card2} text-center m-auto py-5`}>
                    <h1 className='text-light'>Newsletter</h1>
                    <h2 className='text-light'>Get Smarter About No-Code</h2>
                    <p className='text-light fs-5 py-3'>The best No-Code tips & tricks, for webflow & Framer developers from <br />experts to beginner. Join our 3k community by subscribing</p>
                    <div>
                        <input className="rounded me-2" type="text" name="email" placeholder='please enter your email' />
                        <button className={`${style.btn1}`}>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
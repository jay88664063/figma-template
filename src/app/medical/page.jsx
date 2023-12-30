import React from 'react'
import style from '../style/style.module.css'
import News from '../component/News';
import Img from '../component/Img';

const page = () => {
    return (
        <div className='container-fluid'>
            <div className="container">

                <Img/>

                <div className='col-12'>
                    <h1 className={`${style.title4} text-center`}>OUR SERVICE</h1>
                    <h2 className="text-center text-dark fw-bold">MEDICAL SERVICE</h2>
                    <div className='mx-5'>
                        <img src="/Group 1171275359.png" alt="" />
                    </div>
                </div>
                <div className="col-12 mt-5 mb-3">
                    <div>
                        <h1 className={`${style.title4} text-center`}>services</h1>
                        <h2 className="text-center text-dark fw-bold">Treatments</h2>
                    </div>
                    <div className='mx-5'>
                        <img src="/Group 1171275201.png" alt="" />
                    </div>

                    <News/>
                    
                </div>
            </div>
        </div>
    )
}

export default page;
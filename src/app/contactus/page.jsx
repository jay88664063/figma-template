import React from 'react'
import style from '../style/style.module.css'
import Img from '../component/Img'
import News from '../component/News'

const page = () => {
  return (
    <div className='container-fluid'>
<div className="container">
    <Img/>
    <div>
        <h1 className={`${style.title3} text-center`}>GET IN TOUCH</h1>
        <h2 className={`${style.title2} fw-bold`}>Dhameliya Kidney Hospital</h2>
        <div className="col-12">
            <div className='mt-5 mx-3'>
                <img src="/Group 1171275345.png" alt="" />
            </div>
        </div>
    </div>
    <News/>
</div>
    </div>
  )
}

export default page
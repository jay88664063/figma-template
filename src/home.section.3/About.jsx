"use client"
import { useState } from "react";
import style from '../style/style.module.css'

const About = () => {
    const data = [
        {
            name: "Kidney Stone",
            description: "We are providing the cerdiology services for our patient that very much. We are providing the cerdiology services for our patient that very much.",
            image: "/Rectangle 4345.png",
        },
        {
            name: "Prostate",
            description: "We are providing the cerdiology services for our patient that very much. We are providing the cerdiology services for our patient that very much.",
            image: "/Rectangle 4345 (3).png",
        },
        {
            name: "Uro Oncology",
            description: "We are providing the cerdiology services for our patient that very much. We are providing the cerdiology services for our patient that very much.",
            image: "/Rectangle 4345 (2).png",
        }

    ]

    const [product, setProduct] = useState(data)
    console.log(product)

    // const [search, setSearch] = useState('');
    return (
        <>
            <div className={`${style.bgc} container-fluid`}>
                <div className="container pb-5">
                    <div className="py-3">
                        <h3 className={style.title1}>Services</h3>
                        <h3 className={style.title2}>Our Medical Services</h3>
                    </div>
                    <div className="row">
                        {
                            product.map((element) => {
                                // console.log(element);    
                                return (
                                    <div className="col-4">
                                        <div className={`${style.cad}`}>
                                            <h1 className={`${style.cardt1} text-center pt-4`}>{element.name}</h1>
                                            <h3 className={`${style.cardt2} px-3`}>{element.description}</h3>
                                            <div className="">
                                                <img className="text-center ms-3" src={element.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;





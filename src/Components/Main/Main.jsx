import React, {useEffect} from "react";
import './main.css';
import './main.scss';
import img from '../../Assets/img_1.jpg';
import img2 from '../../Assets/img_2.jpg';
import img3 from '../../Assets/img_3.jpg';
import img4 from '../../Assets/img_4.jpg';
import img5 from '../../Assets/img_5.jpg';

import {HiOutlineLocationMarker} from 'react-icons/hi';
import {HiOutlineClipboardCheck} from 'react-icons/hi';

import Aos from "aos";
import 'aos/dist/aos.css';


const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: "Bora Bora",
        location: "New Zealand", 
        grade: "CULTURAL RELAX", 
        fees: '$700°', 
        description: "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities."
    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'Machu Picchu', 
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
    },
    
    {
        id:3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is ¶lavish" and "beauty". Always interesting to be in this place.'
    },

    {
        id:4,
        imgSrc: img4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$1600',
        description: 'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities.'
    },

    {
        id:5,
        imgSrc: img5,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1200',
        description: 'A city in central Mexico, Guanajuato is known for its history. of silver mining-and-colonial architecture. The houses in the city are very. attractively painted with the most-bright colors available. Always welcome.'
    },
];


const Main = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);

    return (
        <section className="main conatiner section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                        return (
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo" >
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <div className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main;
import React, {useEffect} from "react";
import './footer.css';
import './footer.scss'
import oceanVid from '../../Assets/ocean.mp4';
import { FiChevronRight, FiSend } from "react-icons/fi";

import {MdOutlineTravelExplore} from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

import Aos from "aos";
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        Aos.init({duration: 1000})
    }, []);

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={oceanVid} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div data-aos="fade-up" className="contactDiv flex">
                    <div className="text">
                        <small>KEEP YOUR TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder="Enter email address" />
                        <button className="btn flex" type="submt">
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon" />
                                Travel.
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam perferendis dolorem repudiandae officia quasi consectetur reiciendis ratione, a asperiores molestiae!
                        </div>

                        <div data-aos="fade-up" className="footerSocials">
                            <AiOutlineTwitter className="icon" />
                            <AiFillYoutube className="icon" />
                            <AiFillInstagram className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/* Group one */}
                        <div data-aos="fade-up" data-aos-duration="1000" className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>

                        {/* Group two */}
                        <div data-aos="fade-up" data-aos-duration="1500" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Rent cars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Hostelworld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                TripAdvisor
                            </li>
                        </div>

                        {/* Group three */}
                        <div data-aos="fade-up" data-aos-duration="2000" className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Indonesia
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Europe
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Oceania
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
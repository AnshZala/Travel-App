import React, {useState} from "react";
import './navbar.css';
import './navbar.scss';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    const showNav = () => {
        setActive('navBar activeNavbar');
    }
    const removeNavbar = () => {
        setActive('navBar');
    }

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <span className="logo flex">        {/* a href="#" */}
                        <h1>
                            <MdOutlineTravelExplore className="icon" />
                            Travel.
                        </h1>
                    </span>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <span className="navLink">Home</span>       {/* a href="#" */}
                        </li>
                        <li className="navItem">
                            <span className="navLink">Packages</span>    {/* a href="#" */}
                        </li>
                        <li className="navItem">
                            <span className="navLink">Shop</span>       {/* a href="#" */}
                        </li>
                        <li className="navItem">
                            <span className="navLink">About</span>      {/* a href="#" */}
                        </li>
                        <li className="navItem">
                            <span className="navLink">Pages</span>      {/* a href="#" */}
                        </li>
                        <li className="navItem">
                            <span className="navLink">News</span>       {/* a href="#" */}
                        </li>
                        <li className="navItem">
                            <span className="navLink">Contact</span>    {/* a href="#" */}
                        </li>

                        <button className="btn"><span>Book Now</span></button>
                        <div onClick={removeNavbar} className="closeNavbar">
                            <AiFillCloseCircle className="icon"/>
                        </div>
                    </ul>

                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    )
}

export default Navbar;
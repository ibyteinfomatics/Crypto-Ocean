import React, {useState} from 'react';
import Connectbutton from "./Connectbutton";
import Logo from './Logo';
const hamburger = "./assets/images/hamburger-icon.png";
const menuNav  = 
    <ul className="lg:flex">
        <li>
            <a href="#mintbox">Mintbox</a>
        </li>
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#donation">Donation</a>
        </li>
        <li>
            <a href="#sailmap">Sail Map</a>
        </li>
        <li>
            <a href="#team">Team</a>
        </li>
        <li>
            <a href="#playearn">Play To Earn</a>
        </li>
        <li>
            <a href="#faqs">FAQ</a>
        </li>
        <li>
            <a href="#contact">Contact us</a>
        </li>
    </ul>;

function Nav(){
    const [show, setShow] = useState(false);
    return(
        <>
            <div className="site__navigation">
                {menuNav}
            </div>
            <div className="mobile__navigation">
                <button className="toggle--menu" onClick={() => setShow(!show)}>
                    <span className={show? "active" : ""}>
                        <img className="hamburger--icon" src={hamburger} alt="Hamburger icon" />
                        <span className="close--icon">X</span>
                    </span>
                </button>
                { show &&
                    <div className="nav-menu">
                        <Connectbutton />
                        {menuNav}
                        <Logo />
                    </div>
                }
            </div>
        </>
    )
}

export default Nav;
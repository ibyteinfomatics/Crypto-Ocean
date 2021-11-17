import React, {useState} from 'react';
import Connectbutton from "./Connectbutton";
import Logo from './Logo';
const hamburger = "./assets/images/hamburger-icon.png";
const menuNav  = 
    <ul>
        <li>
            <a href="#mintbox">Minting</a>
        </li>
        <li>
            <a href="#about">Story</a>
        </li>
        <li>
            <a href="#donation">Exposure</a>
        </li>
        <li>
            <a href="#sailmap">Sail Map</a>
        </li>
        <li>
            <a href="#ProfileSlider">Collection</a>
        </li>
        <li>
            <a href="#playearn">$caviar</a>
        </li>
        <li>
            <a href="#team">Team</a>
        </li>
        <li>
            <a href="#faqs">FAQ</a>
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
                
                <div className="nav-menu"  id={show? "active-menu" : ""}>
                    <Connectbutton />
                    {menuNav}
                    <Logo />
                </div>
            </div>
        </>
    )
}

export default Nav;
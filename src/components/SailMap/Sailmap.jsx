// import React, {useEffect} from 'react';
import Sailmaplist from "./Sailmaplist";
// import Aos from 'aos';
// import 'aos/dist/aos.css';

const iconship = "./assets/images/icon-ship.png";
const lightHouse = "./assets/images/light-house.png";
const iconwaves = "./assets/images/waves.png";

function Sailmap(){
    // useEffect(() => {
    //     Aos.init();
    // }, []);
    return(
        <>
        <div className="sailmap--top--images">
            <div className="icon-waves">
                <img src={iconwaves} alt="Waves" data-aos="slide-left" data-aos-duration="1000" data-aos-once="true" />
            </div>
            <div className="icon--ship mobile--view" data-aos="slide-right" data-aos-duration="3000" data-aos-once="true">
                <img src={iconship} alt="Icon Ship" />
            </div>
            <div className="light-house mobile--view" data-aos="slide-left" data-aos-duration="3000" data-aos-once="true">
                <img src={lightHouse} alt="Light House" />
            </div>
            <div className="icon--ship desktop-view">
                <img src={iconship} alt="Icon Ship" />
            </div>
            <div className="light-house desktop-view">
                <img src={lightHouse} alt="Light House" />
            </div>
        </div>
        <div className="section--wrapper wrapper box--wrapper sailmap--wrapper">
            <div className="box-content text-center">
                <h2 className="title">Sail Map</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tempus venenatis at id urna. Mauris duis pellentesque at euismod temporMa</p>
            </div>
            <div className="sailmap--list">
                <ul>
                    <Sailmaplist  
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Aug"
                        listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Sep"
                        listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Oct"
                        listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Nov"
                        listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                </ul>
            </div>
        </div>
        
        <div className="btn discord--button" data-aos="fade-down" data-aos-duration="1000">
            <a href="javascript:void(0)">Join Discord</a>
        </div>
        </>
    )
}

export default Sailmap;
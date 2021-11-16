import React, {useEffect, useState} from 'react';
import Sailmaplist from "./Sailmaplist";
import $ from 'jquery';
// import Aos from 'aos';
// import 'aos/dist/aos.css';

const iconship = "./assets/images/icon-ship.gif";
const lightHouse = "./assets/images/light-house.gif";
const iconwaves = "./assets/images/waves.png";


function Sailmap(){
    const [waveClass, setWaveClass] = useState("wave1");
    useEffect(() => {

        $(".sailmap--wrapper").scroll(function() { 
            let element = document.getElementById("scrollBar"); 
            let width = element.scrollWidth-$(".bg-move").width()-10;
            let moveForward = $(".sailmap--wrapper").scrollTop();
            
            let height = element.clientHeight;
            let scrollHeight = element.scrollHeight - height;
            let scrollTop = element.scrollTop;
            let percentage = Math.floor(scrollTop / scrollHeight * 100);

            let leftPosition = (width * percentage)/100;
            
            $(".icon--ship")
                    .find(".bg-move")
                    .css({ left: leftPosition,position:"absolute" });   
        });

    }, []);
    return(
        <>
        <div className="sailmap--top--images">
            <div className="icon-waves">
                <img src={iconwaves} alt="Waves" />
            </div>
            {/* <div className="icon--ship mobile--view" data-aos="slide-right" data-aos-duration="3000" data-aos-once="true">
                <img src={iconship} alt="Icon Ship" className="bg-move" id="sailship" />
            </div>
            <div className="light-house mobile--view" data-aos="slide-left" data-aos-duration="1000" data-aos-once="true">
                <img src={lightHouse} alt="Light House" />
            </div> */}
            <div className="icon--ship">
                <img src={iconship} alt="Icon Ship" className="bg-move" />
            </div>
            <div className="light-house">
                <img src={lightHouse} alt="Light House" />
            </div>
        </div>
        <div className="wrapper box--wrapper test--wrap">
        <div className="section--wrapper wrapper sailmap--wrapper" id="scrollBar">
            <div className="box-content text-center">
                <h2 className="title">Sail Map</h2>
                <p>This roadmap charts our progress and route for CryptOcean, which may evolve, as we aim to give you the ultimate NFT journey</p>
            </div>
            <div className="sailmap--list">
                <ul>
                    <Sailmaplist  
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "AUG"
                        listData1 = "Conceptualization & Planning - Creating a strong concept with focus on artwork quality and project Sail Map"
                        listData2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Feb"
                        listData1 = "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                        listData2 = "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Mar"
                        listData1 = "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                        listData2 = "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Apr"
                        listData1 = "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                        listData2 = "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist  
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "May"
                        listData1 = "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                        listData2 = "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Jun"
                        listData1 = "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                        listData2 = "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist  
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "July"
                        listData1 = "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                        listData2 = "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Augs"
                        listData1 = "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                        listData2 = "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Sept"
                        listData1 = "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                        listData2 = "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Oct"
                        listData1 = "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                        listData2 = "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist  
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Nov"
                        listData1 = "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                        listData2 = "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Dec"
                        listData1 = "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                        listData2 = "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                </ul>
            </div>
        </div>
        </div>
        
        {/* <div className="btn discord--button" data-aos="fade-down" data-aos-duration="1000">
            <a href="javascript:void(0)">Join Discord</a>
        </div> */}
        </>
    )
}

export default Sailmap;
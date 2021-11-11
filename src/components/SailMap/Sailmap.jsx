import React, {useEffect, useState} from 'react';
import Sailmaplist from "./Sailmaplist";
import $ from 'jquery';
// import Aos from 'aos';
// import 'aos/dist/aos.css';

const iconship = "./assets/images/icon-ship.png";
const lightHouse = "./assets/images/light-house.png";
const iconwaves = "./assets/images/waves.png";


function Sailmap(){
    const [waveClass, setWaveClass] = useState("wave1");
    useEffect(() => {

        $(".sailmap--wrapper").scroll(function() { 
            let element = document.getElementById("scrollBar"); 
            let width = element.scrollWidth-80;
            let moveForward = $(".sailmap--wrapper").scrollTop();
            
            let height = element.clientHeight;
            let scrollHeight = element.scrollHeight - height;
            let scrollTop = element.scrollTop;
            let percentage = Math.floor(scrollTop / scrollHeight * 100);

            let leftPosition = (width * percentage)/100;

            // console.log("width",width);
            // console.log("moveForward",moveForward);
            // console.log("total height",scrollHeight);
            // console.log("percentage",percentage);
            // console.log("leftPosition",leftPosition);

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
            <div className="icon--ship mobile--view" data-aos="slide-right" data-aos-duration="3000" data-aos-once="true">
                <img src={iconship} alt="Icon Ship" className="bg-move" id="sailship" />
            </div>
            <div className="light-house mobile--view" data-aos="slide-left" data-aos-duration="1000" data-aos-once="true">
                <img src={lightHouse} alt="Light House" />
            </div>
            <div className="icon--ship desktop-view">
                <img src={iconship} alt="Icon Ship" className="bg-move" />
            </div>
            <div className="light-house desktop-view">
                <img src={lightHouse} alt="Light House" />
            </div>
        </div>
        <div className="section--wrapper wrapper box--wrapper sailmap--wrapper" id="scrollBar">
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
                        listMonth = "Jan"
                        listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Feb"
                        listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Mar"
                        listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Apr"
                        listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist  
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "May"
                        listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Jun"
                        listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist  
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "July"
                        listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Augs"
                        listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Sept"
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
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "Dec"
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
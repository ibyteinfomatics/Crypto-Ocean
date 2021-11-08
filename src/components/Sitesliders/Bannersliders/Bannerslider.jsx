import React, {useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSliderImages from "./BannersliderImages";

const BannerSliderImg1 = "./assets/images/Shark.png";
const BannerSliderImg2 = "./assets/images/Mermaid2v2.png";
const BannerSliderImg3 = "./assets/images/Mermaid3.png";
// const wave1 = "../assets/images/wave-1.png";
// const wave2 = "../assets/images/wave-2.png";
// const wave3 = "../assets/images/wave-3.png";
// const wave4 = "../assets/images/wave-4.png";


const settings = {
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    fade: true,
    speed: 500,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100
  };
//   var wave1 = "--i:1";
//   var wave2 = "--i:2";
//   var wave3 = "--i:3";
//   var wave4 = "--i:4";
function Bannerslider(){
    useEffect(() => {
        let wave1 = document.getElementById('wave1');
        let wave2 = document.getElementById('wave2');
        let wave3 = document.getElementById('wave3');
        let wave4 = document.getElementById('wave4');

        window.addEventListener('scroll', function(){
            let value = window.scrollY;
            wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
            wave2.style.backgroundPositionX = 300 + value * -4 + 'px';
            wave3.style.backgroundPositionX = 200 + value * 2 + 'px';
            wave4.style.backgroundPositionX = 100 + value * -2 + 'px';
        });

    }, []);
    return(
        <>
            <div className="site--banner--slider">
                <div className="banner--waves waves-top">
                    <div className="wave" id="wave1" style={{"--i":"1"}}></div>
                    <div className="wave" id="wave2" style={{"--i":"2"}}></div>
                    <div className="wave" id="wave3" style={{"--i":"3"}}></div>
                    <div className="wave" id="wave4" style={{"--i":"4"}}></div>
                </div>
                <Slider {...settings}>
                    <BannerSliderImages SliderImg={BannerSliderImg1} />
                    <BannerSliderImages SliderImg={BannerSliderImg2} />
                    <BannerSliderImages SliderImg={BannerSliderImg3} />
                </Slider>
                {/*<div className="banner--waves waves-top">
                    
                </div>*/}
            </div>
            {/* <div className="banner--waves waves-bottom">
                <img src={wave1} alt="Banner waves" className="banner-wave-4" />
            </div> */}
        </>
    )
}

export default Bannerslider;
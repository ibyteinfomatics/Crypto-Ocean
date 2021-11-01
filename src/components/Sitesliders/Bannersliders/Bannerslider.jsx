import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSliderImages from "./BannersliderImages";

const BannerSliderImg1 = "./assets/images/Shark.png";
const BannerSliderImg2 = "./assets/images/Mermaid2v2.png";
const BannerSliderImg3 = "./assets/images/Mermaid3.png";
const wave1 = "../assets/images/wave-1.png";
const wave2 = "../assets/images/wave-2.png";
const wave3 = "../assets/images/wave-3.png";
const wave4 = "../assets/images/wave-4.png";


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
function Bannerslider(){
    return(
        <>
            <div className="site--banner--slider">
                <div className="banner--waves">
                    <img src={wave4} alt="Banner waves" className="banner-wave-1" data-aos="fade-down" data-aos-duration="12000" />
                    <img src={wave3} alt="Banner waves" className="banner-wave-2" data-aos="fade-up" data-aos-duration="10000" />
                    <img src={wave2} alt="Banner waves" className="banner-wave-3" data-aos="fade-down" data-aos-duration="8000" />
                </div>
                <Slider {...settings}>
                    <BannerSliderImages SliderImg={BannerSliderImg1} />
                    <BannerSliderImages SliderImg={BannerSliderImg2} />
                    <BannerSliderImages SliderImg={BannerSliderImg3} />
                </Slider>
            </div>
            <div className="banner--waves">
                <img src={wave1} alt="Banner waves" className="banner-wave-4" data-aos="fade-up" data-aos-duration="4000" />
            </div>
        </>
    )
}

export default Bannerslider;
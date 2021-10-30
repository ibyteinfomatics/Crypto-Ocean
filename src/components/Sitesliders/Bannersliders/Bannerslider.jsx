import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSliderImages from "./BannersliderImages";

const BannerSliderImg1 = "./assets/images/Shark.png";
const BannerSliderImg2 = "./assets/images/Mermaid2v2.png";
const BannerSliderImg3 = "./assets/images/Mermaid3.png";


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
            <Slider {...settings}>
                <BannerSliderImages SliderImg={BannerSliderImg1} />
                <BannerSliderImages SliderImg={BannerSliderImg2} />
                <BannerSliderImages SliderImg={BannerSliderImg3} />
            </Slider>
        </>
    )
}

export default Bannerslider;
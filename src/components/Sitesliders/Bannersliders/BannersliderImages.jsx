

function BannerSliderImages(propImg){
    return(
        <div className="Slide" data-aos="fade-down">
            <div className="slider-img">
                <img src={propImg.SliderImg} />
            </div>
        </div>
    )
}

export default BannerSliderImages;
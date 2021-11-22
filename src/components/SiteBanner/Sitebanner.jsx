import Socialicons from "../Socialicons/Socialicons";

// const dotsImg = "../assets/images/banner-dots.png";
// const bannerimg1 = "../assets/images/pari.png";
// const wave1 = "../assets/images/wave-1.png";
// const wave2 = "../assets/images/wave-2.png";
// const wave3 = "../assets/images/wave-3.png";
// const wave4 = "../assets/images/wave-4.png";
// const mbBanner = "../assets/images/mb-banner.png";

function Sitebanner(){
    return(
        <>
            <div className="banner--images">
                {/* <div className="banner--dots-bg">
                    <img src={dotsImg} alt="Dots Image" />
                </div> */}
                {/* <div className="banner--waves">
                    <img src={wave4} alt="Banner waves" className="banner-wave-1" />
                    <img src={wave3} alt="Banner waves" className="banner-wave-2" />
                    <img src={wave2} alt="Banner waves" className="banner-wave-3" />
                    <img src={wave1} alt="Banner waves" className="banner-wave-4" />
                    <div className="banner-slider-images">
                        <img src={bannerimg1} alt="Banner Image 1" />
                    </div>
                </div> */}
                {/* <div class="ocean">
                    <div class="wave"></div>
                    <div class="wave"></div>
                </div> */}
            </div>
            <div className="banner--wrapper">
                <div className="banner--content" data-aos="fade-up">
                    <h3 className="banner--title">CryptOcean Metaverse</h3>
                    <p className="banner--text">CryptOcean is the first ocean based metaverse where virtual ocean creatures are minted, documentary films are produced and NFT holders are rewarded.</p>
                    <div className="banner--btn">
                        <a href="https://discord.gg/cryptoceanart" target="_blank">Join Discord</a>
                    </div>
                </div>
            </div>
            <div className="site--social--icons" data-aos="fade-up" data-aos-duration="1000">
                <Socialicons />
            </div>
        </>
    );
}

export default Sitebanner;
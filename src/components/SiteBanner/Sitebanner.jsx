const dotsImg = "../assets/images/banner-dots.png";
const bannerimg1 = "../assets/images/pari.png";
const wave1 = "../assets/images/wave-1.png";
const wave2 = "../assets/images/wave-2.png";
const wave3 = "../assets/images/wave-3.png";
const wave4 = "../assets/images/wave-4.png";

function Sitebanner(){
    return(
        <>
            <div className="banner--images">
                <div className="banner--dots-bg">
                    <img src={dotsImg} alt="Dots Image" />
                </div>
                {/* <div className="banner--waves">
                    <img src={wave4} alt="Banner waves" className="banner-wave-1" />
                    <img src={wave3} alt="Banner waves" className="banner-wave-2" />
                    <img src={wave2} alt="Banner waves" className="banner-wave-3" />
                    <img src={wave1} alt="Banner waves" className="banner-wave-4" />
                    <div className="banner-slider-images">
                        <img src={bannerimg1} alt="Banner Image 1" />
                    </div>
                </div> */}
            </div>
            <div className="banner--wrapper">
                <div className="banner--content">
                    <h3 className="banner--title">CryptOcean Metaverse</h3>
                    <p className="banner--text">The one stop shop for 3D NFT art. With $Squid token airdrops for all holders, plus a play to earn game launching in the roadmap, CryptOcean is the ultimate NFT experience.</p>
                    <div className="banner--btn">
                        <a href="javascript:void(0)">Join Discord</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sitebanner;
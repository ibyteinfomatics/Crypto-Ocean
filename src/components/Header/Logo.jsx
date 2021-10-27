const logoImgSrc = "./assets/images/site-logo.png";

function Logo(){
    return(
        <div className="site__logo">
            <a href="javascript:void(0)">
                <img src={logoImgSrc} alt="Site Logo" />
            </a>
        </div>
    )
}

export default Logo;
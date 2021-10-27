import Logo from "./Logo";
import Nav from "./Nav";
import Connectbutton from "./Connectbutton";
// const logoImgSrc = "./assets/images/site-logo.png";

function Header(){
    return(
        <>
            <Logo />
            <Nav />
            <Connectbutton />
        </>
    )
}

export default Header;
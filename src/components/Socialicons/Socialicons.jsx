
const discord = "../assets/images/discord.png";
const insta = "../assets/images/insta-link.png";
const twtr = "../assets/images/twtr-link.png";
const newIcon = "../assets/images/new-icon.png";
const ytIcon = "../assets/images/yt.png";

function Socialicons(){
    return(
        <ul>
            <li>
                <a href="https://discord.gg/cryptoceanart" target="_blank">
                    <img src={discord} alt="Discord" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/cryptoceanart" target="_blank">
                    <img src={insta} alt="Instagram" />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/cryptoceanart" target="_blank">
                    <img src={twtr} alt="Twitter" />
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/channel/cryptoceanart" target="_blank">
                    <img src={ytIcon} alt="Youtube Icon" />
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" target="_blank">
                    <img src={newIcon} alt="New Icon" />
                </a>
            </li>
        </ul>
    )
}

export default Socialicons;
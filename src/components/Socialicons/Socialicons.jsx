
const discord = "../assets/images/discord.png";
const insta = "../assets/images/insta-link.png";
const twtr = "../assets/images/twtr-link.png";
const newIcon = "../assets/images/new-icon.png";

function Socialicons(){
    return(
        <div className="site--social--icons">
            <ul>
                <li>
                    <a href="javascript:void(0)">
                        <img src={discord} alt="Discord" />
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <img src={insta} alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <img src={twtr} alt="Twitter" />
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)">
                        <img src={newIcon} alt="New Icon" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Socialicons;
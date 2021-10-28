import Mediacontent from "./MediaSection/Mediacontent";
import Mintbox from "../Mintbox/Mintbox";
import Sailmap from "../SailMap/Sailmap";
import Faqs from "../Accordian/Accordian";
import Artists from "../Artists/Artists";

const Story ="./assets/images/story_img.png";
const Donation ="./assets/images/donation_img.png";
const PlayEarn ="./assets/images/playearn_img.png";
const Team ="./assets/images/team_img.png";

function Sitecontent(){
    return(
        <>
            <div id="mintbox" className="mintbox">
                <Mintbox />
            </div>
            <div className="media--section section--alignment-left" id="about">
                <Mediacontent 
                    imgSrc={Story} 
                    imgAlt="Image-1"
                    title="The Story" 
                    introText="CryptOcean is the Underwater Ecosystem for Rare NFT art." 
                    mediaText="Our metaverse is growing every month, with limited edition ocean creatures, created by 3D artists. All NFT creatures can be used in our play to earn game, going live on cryptocean.game in 2022."
                />
            </div>
            <div className="media--section section--alignment-right" id="donation">
                <Mediacontent 
                    imgSrc={Donation} 
                    imgAlt="Image-2"
                    title="Donations" 
                    introText="The Metaverse is Protecting The Universe." 
                    mediaText="Our ocean's marine life is racing extinction, unless we turn the tide urgently. The Oceanic Preservation Society collaborate with award-winning producers to create educational films that expose this extensive global threat."
                    mediaText2="Our donations to OPS are dedicated to sponsoring these films. Our featured tagline 'Stop killing them, start minting instead' highlights awareness and gives us a way to support the planet, whilst investing in NFT."
                />
            </div>
            <div className="Sailmap" id="sailmap">
                <Sailmap />
            </div>
            <div className="media--section section--alignment-right" id="playearn">
                <Mediacontent 
                    imgSrc={PlayEarn} 
                    imgAlt="Image-3"
                    title="Play to earn" 
                    introText="" 
                    mediaText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tempus venenatis at id urna. Mauris duis pellentesque at euismod temporMauris duis pellentesque at euismod temporlentesque at euismod tempor"
                    mediaText2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tempus venenatis at id urna. Mauris duis pellentesque at euismod temporMauris duis pellentesque at euismod temporlentesque at euismod tempor"
                />
            </div>
            <div className="media--section section--alignment-left" id="team">
                <Mediacontent 
                    imgSrc={Team} 
                    imgAlt="Image-4"
                    title="Team" 
                    introText="" 
                    mediaText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tempus venenatis at id urna. Mauris duis pellentesque at euismod temporMauris duis pellentesque at euismod temporlentesque at euismod tempor"
                    mediaText2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tempus venenatis at id urna. Mauris duis pellentesque at euismod temporMauris duis pellentesque at euismod temporlentesque at euismod tempor"
                />
            </div>
            <div className="artist--list">
                <Artists />
            </div>
            <div className="Faqs--list" id="faqs">
                <Faqs />
            </div>
        </>
    );
}

export default Sitecontent;
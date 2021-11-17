import Mediacontent from "./MediaSection/Mediacontent";
import Mintbox from "../Mintbox/Mintbox";
import Sailmap from "../SailMap/Sailmap";
import Faqs from "../Accordian/Accordian";
import Artists from "../Artists/Artists";
import ProfileStyleData from "../StyleNProfile/StyleProfile";

const Story ="./assets/images/story_img.png";
const Donation ="./assets/images/donation_img.png";
const PlayEarn ="./assets/images/playearn_img.png";
const Team ="./assets/images/team_img.gif";
/*
<div id="mintbox" className="mintbox">
                <Mintbox />
            </div>
*/
function Sitecontent(){
    return(
        <>
            {/* <div id="mintbox" className="mintbox">
                <Mintbox />
            </div> */}
            <div className="media--section section--alignment-left" id="about">  
                <div className="about--spacer"></div>
                <Mediacontent 
                    imgSrc={Story} 
                    imgAlt="Image-1"
                    title="The Story" 
                    introText="CryptOcean is the Underwater Ecosystem for Rare NFT art." 
                    mediaText="CryptOcean's mission is to raise awareness for the protection of our Oceans through marine-based NFT art. Our first collection features mermaids, with unique variations of this mythical sea creature."
                    mediaText2="The ecosystem will continue to grow, with new collections and collaborations, as well as $CAVIAR launch, our staking rewards token for CryptOcean holders, all planned for 2022."
                    id="Story"                    
                />
            </div>
            <div className="media--section section--alignment-right" id="donation">
                <div className="donation--spacer"></div>
                <Mediacontent 
                    imgSrc={Donation} 
                    imgAlt="Image-2"
                    title="Film Production" 
                    introText="The Metaverse is Protecting The Universe." 
                    mediaText="Marine life is racing extinction, unless we turn the tide urgently. We sponsor companies focused on ocean conservation to create educational films that expose this extensive global threat."
                    mediaText2="Our featured tagline 'Stop Killing Them, Start Minting Instead' raises awareness of our mission to protect the planet, whilst investing in NFT. Bringing the universe and the metaverse together attracts new investors to CryptOcean and the NFT space. "
                    id="Donation"
                />
            </div>
            <div className="Sailmap" id="sailmap">
                <div className="sailmap--spacer"></div>
                <Sailmap />
            </div>
            <div className="ProfileSlider" id="ProfileSlider">
                <div className="profileslider--spacer"></div>
                <div className="wrapper profile--wrapper">
                    <ProfileStyleData />
                </div>
            </div>
            <div className="media--section section--alignment-right" id="playearn">
                <div className="earn--spacer"></div>
                <Mediacontent 
                    imgSrc={PlayEarn} 
                    imgAlt="Image-3"
                    title="$CAVIAR" 
                    introText="Sustainable Passive Income" 
                    mediaText="$CAVIAR is the official ERC-20 staking rewards token with a utility to purchase post-credit space on educational awareness films for advertisement or promotions."
                    mediaText2="The utility of $CAVIAR makes the rewards ecosystem sustainable, as 75% of the advertisement revenue will be added back to the Uniswap liquidity pool. Each staked NFT will recieve 1 $CAVIAR per hour which means +8700 $CAVIAR profits per year."
                    id="Earn"
                />
            </div>
            <div className="media--section section--alignment-left" id="team">
                <div className="team--spacer"></div>
                <Mediacontent 
                    imgSrc={Team} 
                    imgAlt="Image-4"
                    title="Team" 
                    introText="CryptOcean was created by 11 ocean-obsessed, NFT enthusiasts." 
                    mediaText="The crew consists of experts from across the ocean, with experience in 3D design, conceptualisation, animation, UX design, blockchain development and marketing, with one details-orientated Aqua Captain, charting the voyage and direction for CryptOcean."
                    id="Team"
                />
            </div>
            <div className="artist--list">
                <Artists />
            </div>
            <div className="Faqs--list" id="faqs">
                <div className="faqs--spacer"></div>
                <Faqs />
            </div>
        </>
    );
}

export default Sitecontent;
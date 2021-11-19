import React, {useEffect, useState} from 'react';
import Sailmaplist from "./Sailmaplist";
import $ from 'jquery';
// import Aos from 'aos';
// import 'aos/dist/aos.css';

const iconship = "./assets/images/icon-ship.gif";
const lightHouse = "./assets/images/light-house.gif";
const iconwaves = "./assets/images/waves.png";


function Sailmap(){
    const [waveClass, setWaveClass] = useState("wave1");
    useEffect(() => {

        $(".sailmap--wrapper").scroll(function() { 
            let element = document.getElementById("scrollBar"); 
            let width = element.scrollWidth-$(".bg-move").width()-10;
            let moveForward = $(".sailmap--wrapper").scrollTop();
            
            let height = element.clientHeight;
            let scrollHeight = element.scrollHeight - height;
            let scrollTop = element.scrollTop;
            let percentage = Math.floor(scrollTop / scrollHeight * 100);

            let leftPosition = (width * percentage)/100;
            
            $(".icon--ship")
                    .find(".bg-move")
                    .css({ left: leftPosition,position:"absolute" });   
        });

    }, []);
    return(
        <>
        <div className="sailmap--top--images">
            <div className="icon-waves">
                <img src={iconwaves} alt="Waves" />
            </div>
            {/* <div className="icon--ship mobile--view" data-aos="slide-right" data-aos-duration="3000" data-aos-once="true">
                <img src={iconship} alt="Icon Ship" className="bg-move" id="sailship" />
            </div>
            <div className="light-house mobile--view" data-aos="slide-left" data-aos-duration="1000" data-aos-once="true">
                <img src={lightHouse} alt="Light House" />
            </div> */}
            <div className="icon--ship">
                <img src={iconship} alt="Icon Ship" className="bg-move" />
            </div>
            <div className="light-house">
                <img src={lightHouse} alt="Light House" />
            </div>
        </div>
        <div className="wrapper box--wrapper test--wrap">
        <div className="section--wrapper wrapper sailmap--wrapper" id="scrollBar">
            <div className="box-content text-center">
                <h2 className="title">Sail Map</h2>
                <p>This roadmap charts our progress and route for CryptOcean, which may evolve, as we aim to give you the ultimate NFT journey</p>
            </div>
            <div className="sailmap--list">
                <ul>
                    <Sailmaplist  
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "AUG"
                        listData1 = "Conceptualization & Planning: Creating a strong concept with focus on artwork quality and project Sail Map."
                        listData2 = "Crew Head Hunt: High skills, motivation and belief in the project were core aspects of the crew selection."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "SEPT"
                        listData1 = "Marketing Preparation: Outling a on-going marketing strategy for CryptOcean."
                        listData2 = "Website Wireframes: Briefing and feedback on the site UX to ensure an awesome experience."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "OCT"
                        listData1 = "Community Building: Focus on driving engagement to grow a strong community"
                        listData2 = "Social Media Launch: Twitter and Instagram account creation, followed by Discord with customised features exclusive to CryptOcean."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "NOV"
                        listData1 = "Website Launch: UX optimization with details on the CryptOcean sail map and ECR-20 $CAVIAR token info."
                    />
                    <Sailmaplist  
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "DEC"
                        listData1 = "First Collection Launch: 11,111 Mermaids go live on Ethereum blockchain."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2022"
                        listMonth = "JAN"
                        listData1 = "Film Sponsorship: Initiating the funding and production of the first Ocean awareness film."
                        listData2 = "Giveaways: Competitions for the community and exlusive giveaways for CryptOcean Guardians."
                    />
                    <Sailmaplist  
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2022"
                        listMonth = "FEB"
                        listData1 = "$CAVIAR Token ERC-20 Liquidity Initiation on Uniswap - Airdrop $CAVIAR to the holders and CryptOcean Guardians."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2022"
                        listMonth = "MAR"
                        listData1 = "NFT Staking: Launch with ERC-20 $CAVIAR reward tokens."
                        listData2 = "$CAVIAR Utility Launch: Accepting film advertising using $CAVIAR tokens"
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2021"
                        listMonth = "APR"
                        listData1 = "Film Premiere: 1st film showcase on CryptOcean youtube channel."
                        listData2 = "PR Campaign: Approach agencies and collaborators to increase film exposure." 
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2022"
                        listMonth = "MAY"
                        listData1 = "Special Coral Collection Launch: Limited coral inspired NFTs from all CryptOcean artists."
                        listData2 = "Film Views: Target of 10 million views through organic and paid marketing."
                    />
                    <Sailmaplist  
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2022"
                        listMonth = "JUNE"
                        listData1 = "World Ocean's Day: $250K direct donation to Ocean preservation charities on the 8th June."
                    />
                    <Sailmaplist 
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2022"
                        listMonth = "JULY"
                        listData1 = "CryptOcean Portfolio Staking: Lock your CryptOcean portfolio for 3 months to mint an exclusive Whale NFT."
                        listData2 = "Whale NFT Terms: you must hold at least 1 NFT from each CryptOcean collection to be eligible."
                    />
                     <Sailmaplist  
                        fadeAni= "slide-left"
                        fadeDur= "1000"
                        efftrept="true"
                        listYear = "2022"
                        listMonth = "AUG"
                        listData1 = "CryptOcean Crew Gathering - Team lighthouse gathering to chart the future Sail Map"
                    />
                </ul>
            </div>
        </div>
        </div>
        
        {/* <div className="btn discord--button" data-aos="fade-down" data-aos-duration="1000">
            <a href="javascript:void(0)">Join Discord</a>
        </div> */}
        </>
    )
}

export default Sailmap;
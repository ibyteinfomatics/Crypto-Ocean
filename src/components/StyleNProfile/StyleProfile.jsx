import React, {useEffect, useState} from 'react';
import ProfileSlider from "../Sitesliders/StyleNProfilesSlider/ProfileSliders";
import $ from 'jquery';

function ProfileStyleData(){
    useEffect(() => {

        window.addEventListener("orientationchange", function() {
            if(window.screen.orientation.angle == 90){
                $(".profilin")
                    .css({ marginTop: "35%" }); 
            }else{
                $(".profilin")
                    .css({ marginTop: "3rem" });
            }
        });

    }, []);

    return(
        <>
            <div className="profile-slider-cont" data-aos="zoom-in">
                <ProfileSlider />
            </div>
            <div className="profile-slider-data profilin" data-aos="fade-up">
                <h3 className="title">Stlin' & Profilin'</h3>
                <p>Stylin' & Profilin'<br />
                Personalize your Cryptoys with exclusive accessories and clothing to make your Cryptoys more unique. Each item is an NFT you can buy, sell, and trade with others in the Cryptoyverse.</p>
            </div>
        </>
    )
}

export default ProfileStyleData;
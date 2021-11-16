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
                <h3 className="title">Mermaid Collection</h3>
                <p>11,111 mermaids are living in CryptOcean, all created in 4K resolution, with individual personalities and traits.</p>
                <ul>
                    <li>The original sisters gang is made up of 6,000 mermaids who were the first to enter CryptOcean and form the underwater metaverse.</li>
                    <li>2,111 mermaids have been created by the ocean gods with neon light and luminous skin, making them the Queens of CryptOcean.</li>
                    <li>The mermen are the Kings of CryptOcean, with 3000 in existence.</li>
                </ul>
            </div>
        </>
    )
}

export default ProfileStyleData;
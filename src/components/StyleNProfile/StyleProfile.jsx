import ProfileSlider from "../Sitesliders/StyleNProfilesSlider/ProfileSliders";

function ProfileStyleData(){
    return(
        <>
            <div className="profile-slider-cont" data-aos="zoom-in">
                <ProfileSlider />
            </div>
            <div className="profile-slider-data" data-aos="fade-up">
                <h3 className="title">Stlin' & Profilin'</h3>
                <p>Stylin' & Profilin'<br />
                Personalize your Cryptoys with exclusive accessories and clothing to make your Cryptoys more unique. Each item is an NFT you can buy, sell, and trade with others in the Cryptoyverse.</p>
            </div>
        </>
    )
}

export default ProfileStyleData;
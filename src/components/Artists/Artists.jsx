import ArtistsList from "./ArtistsList";

const artist1 = "./assets/images/artist-1.png";
const artist2 = "./assets/images/artist-2.png";
const artist3 = "./assets/images/artist-3.png";
const artist4 = "./assets/images/artist-4.png";
const artist5 = "./assets/images/artist-5.png";
const artist6 = "./assets/images/artist-6.png";
function Artists(){
    return(
        <>
            <div className="section--wrapper wrapper artist--wrapper" data-aos="fade-up" data-aos-duration="1000">
                <h3 className="title">Guest Artists</h3>
                <div className="artist--list">
                    <ul>
                        <ArtistsList 
                            imgSrc = {artist1}
                            artistName = "Metatim"
                            link = "javascript:void(0)"
                            insLink = "javascript:void(0)"
                            driveLink = "javascript:void(0)"
                            twtrLink = "javascript:void(0)"
                        />
                        <ArtistsList 
                            imgSrc = {artist2}
                            artistName = "Metatim"
                            link = "javascript:void(0)"
                            insLink = "javascript:void(0)"
                            driveLink = "javascript:void(0)"
                            twtrLink = "javascript:void(0)"
                        />
                        <ArtistsList 
                            imgSrc = {artist3}
                            artistName = "Metatim"
                            link = "javascript:void(0)"
                            insLink = "javascript:void(0)"
                            driveLink = "javascript:void(0)"
                            twtrLink = "javascript:void(0)"
                        />
                        <ArtistsList 
                            imgSrc = {artist4}
                            artistName = "Metatim"
                            link = "javascript:void(0)"
                            insLink = "javascript:void(0)"
                            driveLink = "javascript:void(0)"
                            twtrLink = "javascript:void(0)"
                        />
                        <ArtistsList 
                            imgSrc = {artist5}
                            artistName = "Metatim"
                            link = "javascript:void(0)"
                            insLink = "javascript:void(0)"
                            driveLink = "javascript:void(0)"
                            twtrLink = "javascript:void(0)"
                        />
                        <ArtistsList 
                            imgSrc = {artist6}
                            artistName = "Metatim"
                            link = "javascript:void(0)"
                            insLink = "javascript:void(0)"
                            driveLink = "javascript:void(0)"
                            twtrLink = "javascript:void(0)"
                        />
                        <ArtistsList 
                            imgSrc = {artist1}
                            artistName = "Metatim"
                            link = "javascript:void(0)"
                            insLink = "javascript:void(0)"
                            driveLink = "javascript:void(0)"
                            twtrLink = "javascript:void(0)"
                        />
                        <ArtistsList 
                            imgSrc = {artist2}
                            artistName = "Metatim"
                            link = "javascript:void(0)"
                            insLink = "javascript:void(0)"
                            driveLink = "javascript:void(0)"
                            twtrLink = "javascript:void(0)"
                        />
                        <ArtistsList 
                            imgSrc = {artist3}
                            artistName = "Metatim"
                            link = "javascript:void(0)"
                            insLink = "javascript:void(0)"
                            driveLink = "javascript:void(0)"
                            twtrLink = "javascript:void(0)"
                        />
                        <ArtistsList 
                            imgSrc = {artist4}
                            artistName = "Metatim"
                            link = "javascript:void(0)"
                            insLink = "javascript:void(0)"
                            driveLink = "javascript:void(0)"
                            twtrLink = "javascript:void(0)"
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Artists;
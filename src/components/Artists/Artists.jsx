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
                <h3 className="title">Artists</h3>
                <div className="artist--list">
                    <ul>
                        <ArtistsList 
                            imgSrc = {artist1}
                            artistName = "Serhat Yucekaya"
                            link = "javascript:void(0)"
                            twtrLink = "https://twitter.com/YucekayaSerhat"
                            insLink = ""
                            artLink = ""
                            linkdineLink = ""
                        />
                        <ArtistsList 
                            imgSrc = {artist2}
                            artistName = "Darina Evstigneeva"
                            link = "javascript:void(0)"
                            insLink = "https://www.instagram.com/dasha_eva_art/"
                            artLink = "https://www.artstation.com/dasha_eva"
                            twtrLink = ""
                            linkdineLink = ""
                        />
                        <ArtistsList 
                            imgSrc = {artist3}
                            artistName = "Diana"
                            link = "javascript:void(0)"
                            insLink = ""
                            artLink = "https://www.artstation.com/diomiji"
                            twtrLink = ""
                            linkdineLink = ""
                        />
                        <ArtistsList 
                            imgSrc = {artist4}
                            artistName = "Amir Hossein"
                            link = "javascript:void(0)"
                            insLink = ""
                            artLink = "https://www.artstation.com/elvin0513"
                            twtrLink = ""
                            linkdineLink = ""
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Artists;
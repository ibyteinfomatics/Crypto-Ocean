const instImg = './assets/images/insta-link.png';
// const driveImg = './assets/images/drive-link.png';
const linkImg = './assets/images/link-icon.png';
const twtrImg = './assets/images/twtr-link.png';

function ArtistsList(props){
    return(
        <>
            <li>
                <div className="artist--img">
                    <img src={props.imgSrc} alt={props.name} />
                </div>
                <div className="artist--detail">
                    <p className="artist--name">{props.artistName}</p>
                    <p className="artist--contact"><a href={props.link}>Contact me</a></p>
                    <ul className="artist--social--links">
                        <li className="insta--link">
                            <a href={props.insLink}>
                                <img src={instImg} alt="Instagram" />
                            </a>
                        </li>
                        <li className="drive--link">
                            <a href={props.driveLink}>
                                <img src={linkImg} alt="Linkdine" />
                            </a>
                        </li>
                        <li className="twtr--link">
                            <a href={props.twtrLink}>
                                <img src={twtrImg} alt="Twitter" />
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </>
    )
}

export default ArtistsList;
const instImg = './assets/images/insta-link.png';
const artImg = './assets/images/drive-link.png';
const linkdineImg = './assets/images/link-icon.png';
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
                    <p className="artist--contact"><a href={props.link}></a></p>
                    <ul className="artist--social--links">
                        <li className="insta--link">
                            <a href={props.insLink} target="_blank" title="Instagram">
                                <img src={instImg} alt="Instagram" />
                            </a>
                        </li>
                        <li className="drive--link" target="_blank" title="Artstation">
                            <a href={props.artLink}>
                                <img src={artImg} alt="Artstation" />
                            </a>
                        </li>
                        <li className="twtr--link" target="_blank" title="Twitter">
                            <a href={props.twtrLink}>
                                <img src={twtrImg} alt="Twitter" />
                            </a>
                        </li>
                        <li className="linkdine--link" target="_blank" title="Linkdine">
                            <a href={props.twtrLink}>
                                <img src={linkdineImg} alt="Twitter" />
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </>
    )
}

export default ArtistsList;
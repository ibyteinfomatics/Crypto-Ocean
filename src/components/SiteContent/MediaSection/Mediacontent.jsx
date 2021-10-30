function Mediacontent(props){
    console.log(props);
    return(
        <div className="media--wrapper wrapper">
            <h3 className="media--mb--title title" data-aos="fade-up" data-aos-duration="1000">{props.title}</h3>
            <div className="media--item" data-aos="fade-down" data-aos-duration="1000">
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <div className="media--content" data-aos="fade-up" data-aos-duration="1000">
                <h3 className="media--title title">{props.title}</h3>
                <div className="media--text">
                    <p className="media--highlight">{props.introText}</p>
                    <p>{props.mediaText}</p>
                    <p>{props.mediaText2}</p>
                </div>
            </div>
        </div>
    );
}

export default Mediacontent;
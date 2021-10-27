function Mediacontent(props){
    console.log(props);
    return(
        <div className="media--wrapper wrapper">
            <div className="media--item">
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <div className="media--content">
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
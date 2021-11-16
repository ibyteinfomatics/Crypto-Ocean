

function Sailmaplist(props){
    return(
        // <li data-aos={props.fadeAni} data-aos-duration={props.fadedur} data-aos-once={props.efftrept}>
        <li>
            <div className="list--date">
                <span className="list--year">{props.listYear}</span>
                <span className="list--month">{props.listMonth}</span>
            </div>
            <div className="listing--data">
                <ul>
                    <li>{props.listData1}</li>
                    <li>{props.listData2}</li>
                </ul>
            </div>
        </li>
    )
}

export default Sailmaplist;
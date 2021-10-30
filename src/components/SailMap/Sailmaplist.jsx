

function Sailmaplist(props){
    return(
        <li data-aos={props.fadeAni} data-aos-duration={props.fadedur}>
            <div className="list--date">
                <span className="list--year">{props.listYear}</span>
                <span className="list--month">{props.listMonth}</span>
            </div>
            <div className="listing--data">
                <ul>
                    <li>{props.listData}</li>
                    <li>{props.listData}</li>
                </ul>
            </div>
        </li>
    )
}

export default Sailmaplist;
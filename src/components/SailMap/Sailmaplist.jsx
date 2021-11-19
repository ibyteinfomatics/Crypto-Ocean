

function Sailmaplist(props){
    return(
        <li>
            <div className="list--date">
                <span className="list--year">{props.listYear}</span>
                <span className="list--month">{props.listMonth}</span>
            </div>
            <div className="listing--data">
                <ul>
                {props.listData1 &&
                    <li>{props.listData1}</li>
                }
                {props.listData2 &&
                    <li>{props.listData2}</li>
                }
                </ul>
            </div>
        </li>
    )
}

export default Sailmaplist;
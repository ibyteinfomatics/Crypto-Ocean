import Sailmaplist from "./Sailmaplist";

function Sailmap(){
    return(
        <>
        <div className="section--wrapper wrapper box--wrapper sailmap--wrapper">
            <div className="box-content text-center">
                <h2 className="title">Sail Map</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tempus venenatis at id urna. Mauris duis pellentesque at euismod temporMa</p>
            </div>
            <div className="sailmap--list">
                <Sailmaplist 
                    listYear = "2021"
                    listMonth = "Aug"
                    listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                />
                <Sailmaplist 
                    listYear = "2021"
                    listMonth = "Sep"
                    listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                />
                <Sailmaplist 
                    listYear = "2021"
                    listMonth = "Oct"
                    listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                />
                <Sailmaplist 
                    listYear = "2021"
                    listMonth = "Nov"
                    listData = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."
                />
            </div>
        </div>
        
        <div className="btn discord--button">
            <a href="javascript:void(0)">Join Discord</a>
        </div>
        </>
    )
}

export default Sailmap;
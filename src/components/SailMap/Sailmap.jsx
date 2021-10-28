import Sailmaplist from "./Sailmaplist";

const iconship = "./assets/images/icon-ship.png";
const lightHouse = "./assets/images/light-house.png";
const iconwaves = "./assets/images/waves.png";

function Sailmap(){
    return(
        <>
        <div className="sailmap--top--images">
            <div className="icon-waves">
                <img src={iconwaves} alt="Waves" />
            </div>
            <div className="icon--ship">
                <img src={iconship} alt="Icon Ship" />
            </div>
            <div className="light-house">
                <img src={lightHouse} alt="Light House" />
            </div>
        </div>
        <div className="section--wrapper wrapper box--wrapper sailmap--wrapper">
            <div className="box-content text-center">
                <h2 className="title">Sail Map</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tempus venenatis at id urna. Mauris duis pellentesque at euismod temporMa</p>
            </div>
            <div className="sailmap--list">
                <ul>
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
                </ul>
            </div>
        </div>
        
        <div className="btn discord--button">
            <a href="javascript:void(0)">Join Discord</a>
        </div>
        </>
    )
}

export default Sailmap;
import Countdown from 'react-countdown';

const Shark = "./assets/images/Shark.png";
const MintButton = "./assets/images/mint-button.png";
const StayTunedButton = "./assets/images/stay-tuned-button.png";

const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return( 
        <ul>
            <li>
                <span>Day</span>
                <span>{days}</span>
            </li>
            <li>
                <span>Hour</span>
                <span>{hours}</span>
            </li>
            <li>
                <span>Minute</span>
                <span>{minutes}</span>
            </li>
            <li>
                <span>Second</span>
                <span>{seconds}</span>
            </li>
        </ul>
      );
    }
};

function Mintbox(){
    return (
        <>
            <div className="wrapper box--wrapper mintbox--wrapper">
                <div className="countdown-time">
                    <Countdown
                        date={Date.now() + 500000000}
                        renderer={renderer}
                    />
                </div>
                <div className="box-content text-center">
                    <h3 className="title">Mint Box</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tempus venenatis at id urna. Mauris duis pellentesque at euismod temporMauris duis pellentesque at euismod temporlentesque at euismod tempor</p>
                    <div className="mint--block">
                        <div className="block--img">
                            <img src={Shark} alt="Shark Image" />
                        </div>
                        <div className="block-content-box text-center">
                            <p className="box-highlight text--color--pink">Price per each</p>
                            <h4 className="box-subtitle">0.1 ETH</h4>
                            <div className="box-counter">
                                <h3>Counter</h3>
                            </div>
                            <div className="result">0.1 ETH</div>
                            <div className="mint-button btn">
                                <a href="javascript:void(0)"><img src={MintButton} alt="Mint Button" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="tune--button btn text-left">
                        <a href="javascript:void(0)"><img src={StayTunedButton} alt="Stay Tuned Button" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mintbox;
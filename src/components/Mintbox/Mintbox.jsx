import Countdown from 'react-countdown';
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";

const Shark = "./assets/images/Shark.png";
const MintButton = "./assets/images/mint-button.png";
const StayTunedButton = "./assets/images/stay-tuned-button.png";

const Completionist = () => <span>You are good to go!</span>;

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

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
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
    const [mintAmount, setMintAmount] = useState(1);
    const [CONFIG, SET_CONFIG] = useState({
        CONTRACT_ADDRESS: "",
        SCAN_LINK: "",
        NETWORK: {
        NAME: "",
        SYMBOL: "",
        ID: 0,
        },
        NFT_NAME: "",
        SYMBOL: "",
        MAX_SUPPLY: 1,
        WEI_COST: 0,
        DISPLAY_COST: 0,
        GAS_LIMIT: 0,
        MARKETPLACE: "",
        MARKETPLACE_LINK: "",
        SHOW_BACKGROUND: false,
    });

    const claimNFTs = () => {
        let cost = CONFIG.WEI_COST;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);
        setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
        setClaimingNft(true);
        blockchain.smartContract.methods
        .mint(blockchain.account,mintAmount)
        .send({
            gasLimit: String(totalGasLimit),
            to: CONFIG.CONTRACT_ADDRESS,
            from: blockchain.account,
            value: totalCostWei,
        })
        .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setClaimingNft(false);
        })
        .then((receipt) => {
            console.log(receipt);
            setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
            );
            setClaimingNft(false);
            dispatch(fetchData(blockchain.account));
        });
    };

    const decrementMintAmount = () => {
        let newMintAmount = mintAmount - 1;
        if (newMintAmount < 1) {
        newMintAmount = 1;
        }
        setMintAmount(newMintAmount);
    };

    const incrementMintAmount = () => {
        let newMintAmount = mintAmount + 1;
        if (newMintAmount > 10) {
        newMintAmount = 10;
        }
        setMintAmount(newMintAmount);
    };

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
        dispatch(fetchData(blockchain.account));
        }
    };

    const getConfig = async () => {
        const configResponse = await fetch("/config/config.json", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        });
        const config = await configResponse.json();
        SET_CONFIG(config);
    };

    useEffect(() => {
        getConfig();
    }, []);

    useEffect(() => {
        getData();
    }, [blockchain.account]);

    return (
        <>
            <div className="wrapper box--wrapper mintbox--wrapper" data-aos="fade-in">
                <div className="countdown-time" data-aos="zoom-in" data-aos-duration="1000">
                    <Countdown
                        date={Date.now() + 500000000}
                        renderer={renderer}
                    />
                </div>
                <div className="box-content text-center">
                    <h3 data-aos="fade-up" data-aos-duration="1000" className="title">Mint Box</h3>
                    <p data-aos="fade-up" data-aos-duration="1000">Network: {CONFIG.NETWORK.NAME}</p>
                    <div className="mint--block">
                        <div data-aos="zoom-in" data-aos-duration="1000" className="block--img">
                            <img src={Shark} alt="Shark Image" />
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1000" className="block-content-box text-center">
                            <p className="box-highlight text--color--pink">Price per each</p>
                            <h4 className="box-subtitle">0.1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                  {CONFIG.NETWORK.SYMBOL}.</h4>
                            
                            <div className="result">0.1 {CONFIG.NETWORK.SYMBOL}</div>
                            {blockchain.account === "" ||
                                    blockchain.smartContract === null 
                                        ? (
                                        <>
                                        <p>Connect to the {CONFIG.NETWORK.NAME} network</p>
                                        <div className="mint-button btn"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(connect());
                                                getData();
                                            }}
                                            >
                                            CONNECT
                                            </div>
                                            {blockchain.errorMsg !== "" ? (
                                                    <p>
                                                    {blockchain.errorMsg}
                                                    </p>
                                                ) : null}
                                        </>
                                    ): (
                                        <>
                                          <p>
                                            {feedback}
                                          </p>
                                          <div className="box-counter">
                                            <h3>Counter</h3>
                                        </div>
                                        <div className="box-counter">
                                            <button
                                              style={{ lineHeight: 0.4 }}
                                              disabled={claimingNft ? 1 : 0}
                                              onClick={(e) => {
                                                e.preventDefault();
                                                decrementMintAmount();
                                              }}
                                            >
                                              -
                                            </button>
                                            
                                            <p
                                              style={{
                                                textAlign: "center",
                                                color: "var(--accent-text)",
                                              }}
                                            >
                                              {mintAmount}
                                            </p>
                                            
                                            <button
                                              disabled={claimingNft ? 1 : 0}
                                              onClick={(e) => {
                                                e.preventDefault();
                                                incrementMintAmount();
                                              }}
                                            >
                                              +
                                            </button>
                                          </div>
                                          
                                          <div className="mint-button btn">
                                            <button
                                              disabled={claimingNft ? 1 : 0}
                                              onClick={(e) => {
                                                e.preventDefault();
                                                claimNFTs();
                                                getData();
                                              }}
                                            >
                                            <img src={MintButton} alt="Mint Button" />
                                              {claimingNft ? "BUSY" : "BUY"}
                                            </button>
                                          </div>
                                        </>
                                      )
                                    }
                        </div>
                    </div>
                    { show && 
                    (<div className="tune--button btn text-left">
                        <img src={StayTunedButton} alt="Stay Tuned Button" />
                    </div>)
                    }
                    {/* <div className="progress--bar-block">
                        <div className="progress--bar">
                            <div
                            style={{width: "30%"}}
                            className="progress--bar--filled"
                            ></div>
                        </div>
                        <p className="mt-3">10,584 of 12,000 marauders remaining</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Mintbox;
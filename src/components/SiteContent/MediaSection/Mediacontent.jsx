import React, {useEffect} from "react";
import $ from 'jquery';

function Mediacontent(props){
    useEffect(() => {
        let Story = $("#Story");
        let StoryPosition = Story.position();

        let Donation = $("#Donation");
        let DonationPosition = Donation.position();

        let Earn = $("#Earn");
        let EarnPosition = Earn.position();

        let Team = $("#Team");
        let TeamPosition = Team.position();

        $(window).scroll(function() {
            var windowpos = $(window).scrollTop()-400;
            if (windowpos >= StoryPosition.top) {
                Story.addClass("media--text-animation");
            }

            if (windowpos >= DonationPosition.top) {
                Donation.addClass("media--text-animation");
            }

            if (EarnPosition && windowpos >= EarnPosition.top) {
                Earn.addClass("media--text-animation");
            }

            if (windowpos >= TeamPosition.top) {
                Team.addClass("media--text-animation");
            }
        });

    }, []);

    return(
        <div className="media--wrapper wrapper" id={props.id}>
            <h3 className="media--mb--title title" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{props.title}</h3>
            <div className="media--item" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
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
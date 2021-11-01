import {Carousel} from '3d-react-carousal';

let slides = [
    <img  src="assets/images/Mermaid3.png" alt="1" />,
    <img  src="assets/images/Mermaid4.png" alt="2" />,
    <img  src="assets/images/Mermaid2v2.png" alt="3" />
];

function ProfileSlider(){
    
    return <Carousel slides={slides} />;
}

export default ProfileSlider;
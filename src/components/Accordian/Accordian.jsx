import React, {useState} from 'react';
import AccordionData from './api';
import AccordianList from './AccordianList';
import './accordian.css';
const questMark = './assets/images/quest-mark.png';

const Faqs = () => {
    const [data, setData] = useState(AccordionData);
    return (
        <>
          <div className="section--wrapper wrapper faqs--wrapper">
            <div className="faqs--content text-center">
              <h3 className="title" data-aos="fade-up" data-aos-duration="1000">Frequently Asked  Questions <span><img src={questMark} alt="Question Mark" /></span></h3>
              <p data-aos="fade-up" data-aos-duration="1000">Any questions you have we are here to answer.</p>
            </div>
            <div className="accordian--list" data-aos="zoom-in" data-aos-duration="1000">
            <AccordianList  />
            </div>
          </div>
        </>
    );
}

export default Faqs;
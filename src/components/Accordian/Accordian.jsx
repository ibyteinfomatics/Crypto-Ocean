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
              <h3 className="title">Frequently Asked  Questions <span><img src={questMark} alt="Question Mark" /></span></h3>
              <p>Any questions you have we are here to answer.</p>
            </div>
            <div className="accordian--list">
                <ul>
                  {
                    data.map((curElem) => {
                      const {id} = curElem;
                      return <AccordianList key={id} {...curElem} />
                    })
                  }
                </ul>
            </div>
          </div>
        </>
    );
}

export default Faqs;
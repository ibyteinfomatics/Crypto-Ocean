import React, {useState} from 'react';
import AccordionData from './api';
const AccordianList = ({idx, id, title, content}) => {

    const [show, setShow] = useState(true);
    const [active_id,setId]=useState(0);
    const accorId = `accor_${id}`
    const [data, setData] = useState(AccordionData);


    const handleChange=(idd)=>{
       //console.log(idd);
       (active_id==idd ? setId(0) : setId(idd));
       
    }

    return (
        <>
            <ul>{
                data.map((curElem,index) => {
                    console.log(curElem);
                    return <li id={curElem.id} className={show && curElem.id == active_id ? "const active--list" : "const"} data-activeid={active_id}>
                        <div className="accor-head">                            
                            <p onClick={() => handleChange(curElem.id)} className={show && curElem.id == active_id ? "active" : ""}>
                            {/* <span className="faq-count">{curElem.id}</span> */}
                            {curElem.title}</p>
                        </div>
                        <div className="accor-data">
                        <p>{curElem.content}</p>
                        <ol>
                            {curElem.listingData && curElem.listingData.map((listing) => <li>{listing}</li>)}
                        </ol>
                        {/* <ol>
                            <li>{curElem.contentList1}</li>
                            <li>{curElem.contentList2}</li>
                            <li>{curElem.contentList3}</li>
                            <li>{curElem.contentList4}</li>
                        </ol> */}
                        </div>
                    </li>
                })
                }</ul>
           
        </>
    )
}

export default AccordianList;
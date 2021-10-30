import React, {useState} from 'react';

const AccordianList = ({idx, id, title, content}) => {

    const [show, setShow] = useState(false);
    const [_id,setId]=useState()
    const accorId = `accor_${id}`
    const handleChange=(idx)=>{
        setShow(!show)
        setId(idx+1)
    }

    return (
        <>
            <li id={accorId} className={show && id==_id ?  "const active--list" : "const"}>
                <div className="accor-head">
                    <p onClick={() => handleChange(idx)} className={show? "active" : ""}>{title}</p>
                </div>
                <div className="accor-data">
                <p>{content}</p>
                </div>
            </li>
        </>
    )
}

export default AccordianList;
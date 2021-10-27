import React, {useState} from 'react';

const AccordianList = ({title, content}) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <li>
                <div className="accor-head">
                    <p onClick={() => setShow(!show)} className={show? "active" : ""}>{title}</p>
                </div>
                { show &&
                    <div className="accor-data">
                        <p>{content}</p>
                    </div>
                }
            </li>
        </>
    )
}

export default AccordianList;
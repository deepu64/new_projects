import React, { useState } from "react";
import data from "./data";
import './style.css'

function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    const handleMultipleSelection = (getCurrentId) => {
        let cpyMultiple = [...multiple]
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
        if(findIndexOfCurrentId === -1) {
            cpyMultiple.push(getCurrentId)
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1)
        }
        setMultiple(cpyMultiple)
        console.log("getCurrentId", getCurrentId)
        console.log("multiple", cpyMultiple)
    }

    console.log("selected", selected)
    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}>Enable Multiple Selection</button>
            <div className="accordian">
                {data && data.length > 0 ?
                    data.map(dataItem => <div className="item" key={dataItem.id}>
                        <div className="title" onClick={enableMultipleSelection ?
                            () => handleMultipleSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultipleSelection ?
                            multiple.indexOf(dataItem.id) !==-1 &&
                            <div className="content">{dataItem.answer}</div> :
                            selected === dataItem.id && <div className="content">{dataItem.answer}</div>
                            
                        }
                    </div>)
                    : <div>No Data Found!</div>}
            </div>
        </div>
    )
}

export default Accordian
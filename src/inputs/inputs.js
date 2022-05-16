import React from "react";
import "../App.css"

const InputControlled = (props) => {
    return (
        <input className="iinput" onChange={(event) => props.setValue(event.target.value)}
               value={props.value}
               type={props.type}
               placeholder={props.placeholder}/>
    )
}

export default InputControlled
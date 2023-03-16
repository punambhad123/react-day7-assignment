import React from "react";
import './Style.css'

function RightDiv(props) {
    return (
        <div className="right">
            <button className="btn"onClick={props.changeImage}>Change img</button>
        </div>
    );
}

export default RightDiv;
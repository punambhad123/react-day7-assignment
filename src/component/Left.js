import React from "react";
import './Style.css'


function LeftDiv(props) {
    return(
        <div className="left">
            <img src={props.image} alt="random"/>
        </div>
    );
}

export default LeftDiv;
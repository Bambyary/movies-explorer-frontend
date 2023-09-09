import React from "react";
import './Title.css';

function Title (props) {
    return (
        <h3 className="title">{props.text}</h3>
    )
}

export default Title;
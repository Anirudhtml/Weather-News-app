import React from "react";
import './FeelsLikeItems.css';


function Items(props) {
    return <div className="item-container">
        <p id="name">{props.name}</p>
        <p>{props.value}{props.sign}</p>
    </div>
}

export default Items;
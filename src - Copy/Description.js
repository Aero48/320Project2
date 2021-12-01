import React from "react";

export default function Description(props){
    let currentItem = props.currentItem;
    let buildersList = currentItem.builders.map((builder) => (
        <p>{builder}</p>
    ))

    return(
        <div class = "infoDiv">
            <img src={props.currentItem.image} width="400px"/>
            <h2>{props.currentItem.name}</h2>
            <h2>Builders:</h2> 
            {buildersList}
            <h2>Connections:</h2>
        </div>
    );
}
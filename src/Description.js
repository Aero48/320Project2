import React from "react";

export default function Description(props){
    let locations = props.locations;
    let currentItem = props.currentItem;
    let buildersList = props.locations[props.currentItem].builders.map((builder) => (
        <p>{builder}</p>
    ))
    
    //console.log(locations);
    //console.log(currentItem);
    return(
        <div class = "infoDiv">
            <img src={locations[currentItem].image} width="400px"/>
            <h2>{locations[currentItem].name}</h2>
            <h2>Builders:</h2> 
            {buildersList}
            <h2>Connections:</h2>
        </div>
    );
}
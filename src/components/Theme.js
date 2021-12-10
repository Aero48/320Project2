import react, { useState, useEffect } from "react";
import {Grid} from "@mui/material"

export default function Connections(props){
    //retrieve locations list and currentItem from props
    let locations = props.locations;
    let currentItem = props.currentItem;


    return(
        <div className="description-list">
            <h3>Theme:</h3>
            <a href={locations[currentItem].theme}>{locations[currentItem].theme}</a>
        </div>
    );
}
import React from "react";
import {Grid} from "@mui/material";

export default function Description(props){
    let locations = props.locations;
    let currentItem = props.currentItem;

    let buildersList = locations[currentItem].builders.map((builder) => (
        <Grid item>{builder}</Grid>
    ))

    let connectionsList = locations[currentItem].connections.map((connection) => (
        <Grid item>{connection}</Grid>
    ))
    
    //console.log(locations);
    //console.log(currentItem);
    return(
        <div class = "infoDiv">
            <img src={locations[currentItem].image} width="600px"/>
            <h2>{locations[currentItem].name}</h2>
            <h3>Builders:</h3>
            <Grid container spacing={2}>
                {buildersList}
            </Grid>
            
            <h3>Connections:</h3>
            <Grid>
                {connectionsList}
            </Grid>
            
        </div>
    );
}
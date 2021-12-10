import React from "react";
import {Grid} from "@mui/material"

export default function Connections(props){
    //retrieve locations list and currentItem from props
    let locations = props.locations;
    let currentItem = props.currentItem;

    //map out the connections for the selected location as grid items
    let connectionsList = locations[currentItem].connections.map((connection, ind) => (
        <Grid item key={ind}>{connection}</Grid>
    ))

    return(
        <div className="description-list">
            <h3>Connections:</h3>
            <Grid container spacing={2}>
                {connectionsList}
            </Grid>
        </div>
    );
}
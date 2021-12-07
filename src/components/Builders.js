import React from "react";
import {Grid} from "@mui/material"

export default function Builders(props){
    let locations = props.locations;
    let currentItem = props.currentItem;

    let buildersList = locations[currentItem].builders.map((builder) => (
        <Grid item>{builder}</Grid>
    ))

    return(
        <div>
            <h3>Builders:</h3>
            <Grid container spacing={2}>
                {buildersList}
            </Grid>
        </div>
    );
}
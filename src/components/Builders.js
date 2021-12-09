import React from "react";
import {Grid} from "@mui/material"

export default function Builders(props){
    let locations = props.locations;
    let currentItem = props.currentItem;

    let buildersList = locations[currentItem].builders.map((builder, ind) => (
        <Grid item key = {ind}>{builder}</Grid>
    ))

    return(
        <div className="description-list">
            <h3>Builders:</h3>
            <Grid container spacing={2}>
                {buildersList}
            </Grid>
        </div>
    );
}
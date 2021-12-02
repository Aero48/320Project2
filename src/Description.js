import React from "react";
import {Grid,Stack,Divider} from "@mui/material";

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
            <Stack 
                  direction="column" 
                  divider={<Divider orientation="horizontal" flexItem />}
                  spacing={2}
                  >
            <div>
                <img src={locations[currentItem].image} width="600px"/>
                <h2>{locations[currentItem].name}</h2>
            </div>
            
            <div>
                <h3>Builders:</h3>
                <Grid container spacing={2}>
                    {buildersList}
                </Grid>
            </div>
            
            <div>
                <h3>Connections:</h3>
                <Grid container spacing={2}>
                    {connectionsList}
                </Grid>
            </div>
            </Stack>
            
        </div>
    );
}
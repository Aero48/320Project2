import react, { useState, useEffect } from "react";
import {Grid,Stack,Divider} from "@mui/material";
import Builders from "./Builders";

export default function Description(props){

    //const [ShownInfo, setShownInfo] = useState("");
    //let shownInfo = <Builders locations = {locations} currentItem = {currentItem}/>;
    let locations = props.locations;
    let currentItem = props.currentItem;

    

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
                  spacing={0}
                  >
            <div>
                <img src={locations[currentItem].image} width="600px"/>
                <h2>{locations[currentItem].name}</h2>
            </div>
            
            <Builders locations = {locations} currentItem = {currentItem}/>
            </Stack>
            
        </div>
    );
}
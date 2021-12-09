import react, { useState, useEffect } from "react";
import {Grid,Stack,Divider,Button} from "@mui/material";
import Builders from "./Builders";
import Connections from "./Connections";

export default function Description(props){

    //let shownInfo = <Builders locations = {locations} currentItem = {currentItem}/>;
    const [stateVar, setStateVar] = useState(0);
    let locations = props.locations;
    let currentItem = props.currentItem;

    let possibleComponents = [ <Builders  locations = {locations} currentItem = {currentItem}/>, <Connections  locations = {locations} currentItem = {currentItem}/>];

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
                <img src={locations[currentItem].image} width="500px"/>
                <h2>{locations[currentItem].name}</h2>
                
            </div>
            <div>
            <div className="description-buttoncontainer">
                <div>
                    <Button 
                        variant = "contained" 
                        onClick={() => {
                        setStateVar(0);
                    }}>Builders</Button>
                </div>
                <div>
                    <Button 
                        variant = "contained" 
                        onClick={() => {
                        setStateVar(1);
                    }}>Connections</Button>
                </div>
            
            
            </div>
                {possibleComponents[stateVar]}
            </div>
            
            </Stack>
            
        </div>
    );
}
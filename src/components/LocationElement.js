import React from "react";
import {List, ListItem, Button, Stack, Divider, Container, Grid} from "@mui/material";
import "../main.css";

export default function LocationElement(props){
    //retrieve the location data for that element in the main list from props
    let place = props.place;

    //bases the animation delay off of the id of the location
    let delay = place.id;

    //activates the fadein animation
    const divStyle = {
        animationName: 'fadeIn',
        animationDuration: '1s',
        animationDelay: (delay*.1)+'s',
    }

    return(
        <div class="listElement" style={divStyle}>
           <div class="listElementPart"><img src={place.image} width="200px"/></div>
           <div class="listElementPart">{place.name}</div>
           <div class="listElementPart"a><Button 
              variant = "contained" 
              onClick={() => {
                props.showDescription(place.id);
              }}>Details</Button>
            </div>
        </div>
    );
}
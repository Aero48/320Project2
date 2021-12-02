import React from "react";
import {List, ListItem, Button, Stack, Divider, Container, Grid} from "@mui/material";
import "./main.css";

export default function LocationElement(props){
    let place = props.place;
    let delay = place.id;
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
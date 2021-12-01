import react, { useState, useEffect } from "react";
import {List, ListItem, Button, Stack, Divider, Container, Grid} from "@mui/material";
import {useSpring, animated} from 'react-spring';
import Description from "./Description";
import "./main.css";

export default function MainList(){

    const [locations, setLocations] = useState([]); //List of locations from json file
    const [currentItem, setCurrentItem] = useState(0); //Contains data from the selected location
    const [descriptionBool, setDescriptionBool] = useState(false); //Whether the Description should be showing or not
    const [currentColor, setCurrentColor] = useState("#9cccff");
    const [targetColor, setTargetColor] = useState("");

    //Pulls the data from the json file
    useEffect(() => {
        fetch("data/data.json")
          .then((result) => result.json())
          .then((data) => {
            //store data
            setLocations(data);
          });
        
      }, []);

      console.log(locations);

      let description = null;

      if(descriptionBool){
        description = 
        <div class="infoPanel">
          <Description locations = {locations} currentItem = {currentItem} />
        </div>
      }

      //Maps out divs containing data from locationsList
      const locationList = locations.map((place) => (
         <div key={place.id} class="listElement">
           <div class="listElementPart"><img src={place.image} width="200px"/></div>
           <div class="listElementPart">{place.name}</div>
           <div class="listElementPart"a><Button 
              variant = "contained" 
              onClick={() => {
                showDescription(place.id);
              }}>Details</Button>
            </div>
           
        </div>
      ))

    console.log(currentItem);
    return (
        <div>
            <h1>Liminal World</h1>
            <div class="containerDiv">
              <div class="subContainer">
                <div class="listPanel">
                  
                  <Stack 
                  direction="column" 
                  divider={<Divider orientation="horizontal" flexItem />}
                  spacing={2}
                  >
                    <h2>Locations</h2>
                    {locationList}
                  </Stack>
                </div>
              </div>
              <div class="subContainer">
                {description}
              </div>
            </div>
        </div>
    );

    //Sets the current item to the one that was clicked on
    function showDescription(itemId){
      setCurrentItem(itemId)
      setDescriptionBool(true);
    }
}
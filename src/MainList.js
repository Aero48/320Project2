import react, { useState, useEffect } from "react";
import {List, ListItem, Button, Stack, Divider, Container, Grid} from "@mui/material";
import Description from "./components/Description";
import LocationElement from "./components/LocationElement";
import "./main.css";

export default function MainList(){

    const [locations, setLocations] = useState([]); //List of locations from json file
    const [currentItem, setCurrentItem] = useState(0); //Contains data from the selected location
    const [descriptionBool, setDescriptionBool] = useState(false); //Whether the Description should be showing or not

    //Pulls the data from the json file
    useEffect(() => {
        fetch("data/data.json")
          .then((result) => result.json())
          .then((data) => {
            //store data
            setLocations(data);
          });  
      }, []);

      //initialize description as null so the component doesn't display on page reload
      let description = null;

      //if the descriptionBool variable is true, display the description component on the screen.
      if(descriptionBool){
        description = 
        <div className="infoPanel">
          <Description locations = {locations} currentItem = {currentItem} />
        </div>
      }

      //Maps out divs containing data from locationsList
      const locationList = locations.map((place, ind) => (
        <LocationElement key = {ind} place = {place} showDescription={showDescription}/>
      ))

    console.log(currentItem);
    return (
        <div>
            <h1>Liminal World</h1>
            <div className="containerDiv">
              <div className="subContainerLeft">
                <div className="listPanel">
                  
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
              <div className="subContainerRight">
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
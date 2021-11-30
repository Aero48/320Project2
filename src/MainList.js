import react, { useState, useEffect } from "react";
import {List, ListItem, Button, Stack, Divider, Container, Grid} from "@mui/material";
import Description from "./Description";
import "./main.css";

export default function MainList(){

    const [locations, setLocations] = useState([]); //List of locations from json file
    const [currentItem, setCurrentItem] = useState({}); //Contains data from the selected location

    //Pulls the data from the json file
    useEffect(() => {
        fetch("data/data.json")
          .then((result) => result.json())
          .then((data) => {
            //store data
            setLocations(data);
          });
      }, []);

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

    return (
        <div>
            <h1>Liminal World</h1>
            <Grid container>
              <Grid class="listPanel">
                <Stack 
                direction="column" 
                divider={<Divider orientation="horizontal" flexItem />}
                spacing={2}
                >
                  {locationList}
                </Stack>
              </Grid>
              <Grid class="infoPanel">
                <Description 
                  currentItem = {currentItem}
                />
              </Grid>
            </Grid>
        </div>
    );
    
    //Sets the current item to the one that was clicked on
    function showDescription(itemId){
      setCurrentItem(locations[itemId])
    }
}
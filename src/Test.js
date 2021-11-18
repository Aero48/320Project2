import react, { useState, useEffect } from "react";
import {List, ListItem, Button, Stack, Divider, Container, Grid} from "@mui/material";

export default function Test(){

    const [locations, setLocations] = useState([]);
    const [currentItem, setCurrentItem] = useState({});

    useEffect(() => {
        fetch("data/data.json")
          .then((result) => result.json())
          .then((data) => {
            //store data
            setLocations(data);
          });
      }, []);

      console.log(locations);
      //const firstName = locations[0].name

      const locationList = locations.map((place, ind) => (
         <div key={ind}>
           <img src={place.image} width="200px"/>{place.name}
           <Button 
           variant = "contained" 
           onClick={() => {
            showDescription(place.id);
          }}>Details</Button>
        </div>
      ))

    return (
        <div>
            <h1>Test</h1>
            <Grid container>
              <Grid>
                <Stack 
                direction="column" 
                divider={<Divider orientation="horizontal" flexItem />}
                spacing={2}
                >
                  {locationList}
                </Stack>
              </Grid>
              <Grid>
                <h2>{currentItem.name}</h2>
              </Grid>
            </Grid>
        </div>
    );

    function showDescription(itemId){
      setCurrentItem(locations[itemId])
    }
}
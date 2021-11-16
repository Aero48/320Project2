import react, { useState, useEffect } from "react";
import {List, ListItem} from "@mui/material";

export default function Test(){

    const [locations, setLocations] = useState([]);

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
         <ListItem key={ind}>{place.name}</ListItem>
      ))

      console.log(locationList);

    return (
        <div>
            <h1>Test</h1>
            <List>
              {locationList}
            </List>
        </div>
    )
}
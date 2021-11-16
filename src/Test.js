import react, { useState, useEffect } from "react";

export default function Test(){

    const [locations, setLocations] = useState([]);
    const [locationList, setLocationList] = useState([]);

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

      /*let locationsTemp = [];
      for(let i = 0; i<locations.length; i++){
        locationsTemp[i]=("<li>" + locations[i].name +"</li>");
      }
      setLocationList(locationsTemp);*/

    return (
        <div>
            <h1>Test</h1>
            <ul>
              {locationList}
            </ul>
        </div>
    )
}
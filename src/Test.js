import react, { useState, useEffect } from "react";

export default function Test(){

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch("../public/data/data.json")
          .then((result) => result.json())
          .then((data) => {
            //store data
            setLocations(data);
          });
      }, []);

      console.log(locations);
      //const firstName = locations[0].name

    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}
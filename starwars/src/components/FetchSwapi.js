import React, { useState, useEffect } from "react";
import axios from "axios";

// get data from url
function FetchSwapi() {
  const [respData, setRespData] = useState([]);
  
  const didUpdate = () => {
    axios
      .get("https://swapi.co/api/people/1/")
      .then( response => {
        console.log(response);
        setRespData(response.data);
      })
      .catch( e => console.log("We gots problems", e));
  }

  useEffect(didUpdate, []);

  console.log(respData);
  return (
    <div> here </div>
  );

};

export default FetchSwapi;
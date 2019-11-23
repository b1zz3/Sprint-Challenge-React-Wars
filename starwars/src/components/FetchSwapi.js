import React, { useState, useEffect } from "react";
import axios from "axios";

import PersonCard from "./PersonCard";

// get data from url
function FetchSwapi() {
  const [page, setPage] = useState([]);

  const didUpdate = () => {
    axios
      .get("https://swapi.co/api/people/")
      .then( response => {
        setPage(response.data.results);
        console.log(response);
      })
      .catch( e => console.log("We gots problems", e));
  }

  useEffect(didUpdate, []);

  

  return (
    <div>
      {page.map(person => {
        return <PersonCard name={person.name}/>;
      })}
    </div>
  )
};

export default FetchSwapi;
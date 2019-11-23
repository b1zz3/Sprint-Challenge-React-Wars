import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="peopleList">
      {page.map(person => {
        return <h1 key={person.name}> {person.name} </h1>;
      })}
    </div>
  );

};

export default FetchSwapi;
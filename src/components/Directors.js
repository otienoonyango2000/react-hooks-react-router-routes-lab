import React from "react";
import {directors} from "../data"


function Directors() {
  const allDirectors = directors.map((director)=>{
    return(
      <div>
        <h2>{director.name}</h2>
        <p>{director.movies}</p>
      </div>
    )
  })
  return (
    <div>
    <h1>Directors Page</h1>
    {allDirectors}
  </div>
  )
  
}

export default Directors;

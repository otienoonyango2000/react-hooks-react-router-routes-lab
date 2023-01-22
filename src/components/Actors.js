import React from "react";
import { actors } from "../data";


function Actors() {
  const allActors = actors.map((actor)=>{
    return(
      <div>
        <h2>{actor.name}</h2>
        <p>{actor.movies}</p>
      </div>
    )
  })

  return (
    
    <div>
      <h1>Actors Page</h1>
      {allActors}
    </div>
  )
}

export default Actors;

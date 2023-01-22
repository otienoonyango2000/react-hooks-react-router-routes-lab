import React from "react";
import { movies } from "../data";

function Movies() {


  const allMovies = movies.map((movie)=>{
    return(
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.time}</p>
      </div>
    )
  })
  console.log(allMovies.genres)
  return (
  
  <div>
    <h1>Movies Page</h1>
    {allMovies}
  </div>
  )
}

export default Movies;

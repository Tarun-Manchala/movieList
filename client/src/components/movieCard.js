import React from "react";
import "./moviecard.css"
const Moviecard = (props)=>{
    const movie = props.movie;
    return (
    <div className="movie-card">
        <li key={movie.id}>Name : {movie.name}</li>
        <li key={movie.id}> Director : {movie.director}</li>
        <li key={movie.id}> Language : {movie.lang}</li>
        <li key={movie.id}> Realesed year : {movie.year}</li>
        <li key={movie.id}>Rating : {movie.rating}</li>
    </div>
    )
}

export default Moviecard;
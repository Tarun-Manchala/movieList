import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you've installed axios

function MoviesList() {
    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get('http://localhost:5000/allMovies'); // API endpoint defined in Express.js
            setMovies(response.data);
            }
            catch(err){
                console.log("error in  fetching all movies")
            }
        };
        fetchData();
    },[]);

    console.log(Movies);
    var newmovies=[];
    if (Movies.length > 0) {newmovies = Movies.data.movies;}
    console.log(newmovies);
    return (
        <>
            {newmovies.length > 0 ? ( // Check if movies array has elements
                <ul>
                    {newmovies.map((movie) => (
                        <div className="movielist">
                        <li key={movie.id}>Name : {movie.name}</li>
                        <li key={movie.id}> Director : {movie.Director}</li>
                        <li key={movie.id}> Realesed year : {movie.year}</li>
                        <li key={movie.id}>Rating : {movie.rating}</li>
                        </div>
                    ))}
                </ul>
            ) : (
                <p>Loading movies...</p>  
            )}
        </>
    );
}
export default MoviesList;
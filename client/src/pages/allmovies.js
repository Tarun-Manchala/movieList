import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Moviecard from '../components/movieCard';

function MoviesList() {
    const [Movies, setMovies] = useState([]);
    const BASE_URL = "https://presidio-backend.onrender.com";

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get(`${BASE_URL}/allMovies`);
            setMovies(response.data.data.movies);
            }
            catch(err){
                console.log("error in  fetching all movies")
            }
        };
        fetchData();
    },[]);

    console.log(Movies);
    
    return (
        <>
            <div className="container">
            {Movies.length > 0 ? ( 
                <>
                 <h1>List of Movies</h1>
                <div className="movie-list">
                {Movies.map((movie) => (
                    < Moviecard  key={movie.id} movie={movie} />
                ))}
                        </div>
                        </>
            ) : (
                
                <p>Please wait a minute. Loading movies...</p>  
             
            )}
           </div>
        </>
    );
}
export default MoviesList;
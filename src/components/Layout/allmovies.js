import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you've installed axios
import Header from "../utils/Header/Header";
import Footer from "../utils/Footer/Footer";

function MoviesList() {
    const [Movies, setMovies] = useState([]);
    const [New, setNew] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await axios.get('http://localhost:5000/allMovies'); // API endpoint defined in Express.js
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
        <Header />
        <div className="body">
            {Movies.length > 0 ? ( // Check if movies array has elements
                <ul>
                    {Movies.map((movie) => (
                        <div className="movielist">
                        <li key={movie.id}>Name : {movie.name}</li>
                        <li key={movie.id}> Director : {movie.Director}</li>
                        <li key={movie.id}> Realesed year : {movie.year}</li>
                        <li key={movie.id}>Rating : {movie.rating}</li>
                        </div>
                    ))}
                </ul>
            ) : (
                <p>Please Check the console Loading movies...</p>  
            )}
            </div>
            <Footer/>
        </>
    );
}
export default MoviesList;
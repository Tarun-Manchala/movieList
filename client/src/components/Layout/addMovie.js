import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you've installed axios

function MoviesList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('localhost:5000/allMovies'); // API endpoint defined in Express.js
            setMovies(response.data);
        };
        fetchData();
    }, []);

    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>{movie.name}</li>
            ))}
        </ul>
    );
}
export default MoviesList;
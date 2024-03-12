import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

function AddMovieForm() {
    const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [lang, setlang] = useState('');
    const [year, setyear] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newMovie = {
            name,
            director,
            lang,
            year: parseInt(year), // Convert year to number
            rating: parseFloat(rating), // Convert rating to float
        };

        try {
            const response = await axios.delete('http://localhost:5000/deleteMovie', newMovie);
            console.log('Movie creation response:', response.data);
            // Handle successful creation (e.g., clear form, display confirmation)
        } catch (error) {
            console.error('Error creating movie:', error);
            // Handle errors gracefully (e.g., display error message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Movie Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            
            <button type="submit">Delete Movie</button>
            <Link to="/allMovies"> check the Updated List</Link>
        </form>
    );
}

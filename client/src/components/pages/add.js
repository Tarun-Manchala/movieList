import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import Header from "../utils/Header/Header";
import Footer from "../utils/Footer/Footer";

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
            const response = await axios.post('http://localhost:5000/addMovie', newMovie);
            console.log('Movie creation response:', response.data);
            // Handle successful creation (e.g., clear form, display confirmation)
        } catch (error) {
            console.error('Error creating movie:', error);
            // Handle errors gracefully (e.g., display error message)
        }
    };

    return (

      <> 
      <Header /> 
      <div className="body">
        <form onSubmit={handleSubmit}>
            <label className='item-tag'>
                Movie Name :
                <input type="text" value={name}  onChange={(e) => setName(e.target.value)} />
            </label>
            <label className='item-tag'>
                Director :
                <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
            </label >
            <label className='item-tag'>
                lang :
                <input type="text" value={lang} onChange={(e) => setlang(e.target.value)} />
            </label>
            <label className='item-tag'>
                Released Year :
                <input type="number" value={year} onChange={(e) => setyear(e.target.value)} />
            </label>
            <label className='item-tag'>
                Rating :
                <input type="number" min="0" max="10" value={rating} onChange={(e) => setRating(e.target.value)} />
            </label>
            <button type="submit" className='btn'>Add Movie</button>
            <Link to="/allMovies" className='link'> check the Updated List</Link>
        </form>
        </div>
        <Footer/>
        </>
    );
}


export default AddMovieForm;

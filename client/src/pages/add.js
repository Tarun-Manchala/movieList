import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import "./allpages.css"

function AddMovieForm() {
    const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [lang, setlang] = useState('');
    const [year, setyear] = useState('');
    const [rating, setRating] = useState('');

    const [movies,setMovies]= useState([]);
    const [addedMovie,setAddedMovie]=useState(null);
    const [exist,setExist]=useState(null);

    const BASE_URL = "https://presidio-backend.onrender.com";

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${BASE_URL}/allMovies`); 
            setMovies(response.data.data.movies);
          } catch (error) {
            console.error('Error fetching movies:', error);
            
          }
        };
    
        fetchData();
      }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newMovie = {
            name,
            director,
            lang,
            year: parseInt(year),
            rating: parseFloat(rating), 
        };

        var ref = false;
        for(const movie of movies){
            if (movie.name===newMovie.name){
                ref=true;
            }
        }
        if (!ref){
        try {
            const response = await axios.post(`${BASE_URL}/addMovie`, newMovie);
            setAddedMovie(response.data.data.movies)
            console.log('Movie creation response:', response.data);
            
        } catch (error) {
            console.error('Error creating movie:', error);
            
        }
    }
    else {
        console.error("Movie Already exists");
        setExist("Not exist")
    }
    };

    return (

      <> 
 
      <div className="container">
        <div className="left">
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
                <input type="number" min="0.0" max="10.0" value={rating} onChange={(e) => setRating(e.target.value)} />
            </label>
            <div className="item-tag">
            <button type="submit" className='btn'>Add Movie</button>
            </div>
            <Link to="/allMovies" className='link'> check the Updated List</Link>
        </form>
        </div>
        <div className="right">
        {addedMovie && (
        <div className="movie-details">
            <h2>Added Movie Detais</h2>
          <p> Name : {addedMovie.name}</p>
          <p>Director : {addedMovie.director}</p>
          <p>Release Year : {addedMovie.year}</p>
          <p> Language : {addedMovie.lang}</p>
          <p> Rating : {addedMovie.rating}</p>
        </div>
        )
      }
      {exist && (<>
        <h3>Movie Already exists</h3>
        </>
      )}
        </div>
    </div>
        </>
    );
}


export default AddMovieForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Byrates() {
  const [movies, setMovies] = useState([]);
  const [newmovies, setnewMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const BASE_URL = "https://presidio-backend.onrender.com";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/allMovies`);
        setMovies(response.data.data.movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('An error occurred while fetching movies. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const Rating = {};


  for (const movie of movies) {
    const rates = movie.rating;

   
    if (!Rating[rates]) {
      Rating[rates] = []; 
    }

    Rating[rates].push(movie);
  }
  const uniquerates = Object.keys(Rating);

  const handleSearch = async (event) => {
    event.preventDefault();
    var needed = [];
    for (const obj of uniquerates){
        if (obj=== searchTerm){
            needed.push(obj);
        }
    }
    // console.log(needed);
    setnewMovies(needed) ;
    
    setSelectedMovie(null);
};

  const handleMovieSelect = (movies) => {     
    setSelectedMovie(movies);
  };

  return (
    <>

    <div className="container">
      <div className="left">
      <h1>Search Movies by rates</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="" className="item-tag">
        <input
          type="number"
          placeholder="Enter movie rating"
          name="year"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </label>
        <div className="item-tag">
        <button type="submit" className='btn'>Search</button>
      </div>
      </form>

      {error && <p className="error">{error}</p>}
      </div>

    <div className="right">
      <div className="options">
        <h3> rating list</h3>
      <ul>
        {newmovies.length > 0 ? (
          newmovies.map((movie) => (
            <li key={movie} className="link" onClick={() => handleMovieSelect(Rating[movie])}>
              {movie}
            </li>
          ))
           
        ) : (
          <p>Loading movies...</p>
        )}
      </ul>
      </div>

      {selectedMovie && (
        selectedMovie.map((movie) => (
          <div className="movie-card">
          <h2>Name : {movie.name}</h2>
          <p>Director: {movie.director}</p>
          <p>Language : {movie.lang} </p>
          <p>Released Year: {movie.year}</p>
          <p>Rating : {movie.rating}</p>
        </div>
        )))
      }
    </div>
    </div>
    </>
  );
}

export default Byrates;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Byrelease() {
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

  const Released = {};


  for (const movie of movies) {
    const release = movie.year;

   
    if (!Released[release]) {
      Released[release] = []; 
    }

    Released[release].push(movie);
  }
  const uniqueReleases = Object.keys(Released);

  const handleSearch = async (event) => {
    event.preventDefault();
    // console.log(movies)
    // console.log(Released)
    var needed = [];
    for (const obj of uniqueReleases){
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
      <h1>Search Movies by release</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="" className="item-tag">
        <input
          type="number"
          placeholder="Enter movie release year"
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
        <h3> Click on release year</h3>
      <ul>
        {newmovies.length > 0 ? (
          newmovies.map((movie) => (
            <li key={movie} className="link" onClick={() => handleMovieSelect(Released[movie])}>
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
          <p>Release Year: {movie.year}</p>
          <p>Rating : {movie.rating}</p>
        </div>
        )))
      }
    </div>
    </div>

    </>
  );
}

export default Byrelease;

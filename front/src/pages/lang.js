import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ByLanguage() {
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

  const languageMovies = {};


  for (const movie of movies) {
    const language = movie.lang;

   
    if (!languageMovies[language]) {
      languageMovies[language] = []; 
    }

    languageMovies[language].push(movie);
  }
  const uniquelanguages = Object.keys(languageMovies);

  const handleSearch = async (event) => {
    event.preventDefault();
    // console.log(movies)
    // console.log(languageMovies)
    var needed = [];
    for (const obj of uniquelanguages){
        if (obj.toLowerCase().includes(searchTerm)){
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
      <h1>Search Movies by Language</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter movie name"
          name="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="options">
        <h3> lanuage list</h3>
      <ul>
        {newmovies.length > 0 ? (
          newmovies.map((movie) => (
            <li key={movie} onClick={() => handleMovieSelect(languageMovies[movie])}>
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

    </>
  );
}

export default ByLanguage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchMovie() {
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

  const handleSearch = async (event) => {
    event.preventDefault();
    // console.log(movies)
    setnewMovies( movies.filter(movie => movie.name.toLowerCase().includes(searchTerm)) );
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);

  };

  return (
    <>

    <div className="container">
      <h1>Search Movies</h1>
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
        <h3>Which one you want to update</h3>
      <ul>
        {newmovies.length > 0 ? (
          newmovies.map((movie) => (
            <li key={movie.id} onClick={() => handleMovieSelect(movie)}>
              {movie.name}
            </li>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </ul>
      </div>

      {selectedMovie && (
        <div className="movie-card">
          <h2>Name : {selectedMovie.name}</h2>
          <p>Director: {selectedMovie.director}</p>
          <p>Language : {selectedMovie.lang} </p>
          <p>Release Year: {selectedMovie.year}</p>
          <p>Rating : {selectedMovie.rating}</p>
        </div>
        )
      }

    </div>

    </>
  );
}

export default SearchMovie;
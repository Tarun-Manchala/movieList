import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchMovie() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/allMovies'); // Replace with your API endpoint
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
    setSearchTerm(event.target.name.value.toLowerCase());

    try {
      const response = await axios.get(`http://localhost:5000/searchMovie?name=${searchTerm}`); // Replace with your search API endpoint
      setMovies(response.data.data.movies);
    } catch (error) {
      console.error('Error searching movies:', error);
      setError('An error occurred while searching movies. Please try again later.');
    }
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
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
      <ul>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.id} onClick={() => handleMovieSelect(movie)}>
              {movie.name}
            </li>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </ul>
      {selectedMovie.length && (
        <div className="movie-details">
          <h2>{selectedMovie.name}</h2>
          {/* Display movie details here */}
          <p>Director: {selectedMovie.director}</p>
          <p>Year: {selectedMovie.year}</p>
          {/* ... other details */}
        </div>
      )
      }
    </>
  );
}

export default SearchMovie;

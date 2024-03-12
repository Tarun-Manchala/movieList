import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you've installed axios

function SearchMovie() {
  const [movies, setMovies] = useState([]); // Array to store all movies
  const [searchTerm, setSearchTerm] = useState(''); // User-entered search term
  const [selectedMovie, setSelectedMovie] = useState(null); // Selected movie details
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/allMovies'); // Replace with your API endpoint
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError('An error occurred while fetching movies. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setSearchTerm(event.target.searchTerm.value.toLowerCase()); // Get search term from input
    setSelectedMovie(null); // Clear selected movie on new search
    // Make API call to search for movies based on searchTerm (implementation needed)

    try {
      const response = await axios.get(`http://localhost:5000/allMovies`); // Replace with your search API endpoint
      setMovies(response.data); // Update movies based on search results
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
      <div className="movie">
        <h1>Search Movies</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter movie name"
            name="searchTerm" // Use a name attribute for the input field
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
        {selectedMovie && (
          <div className="movie-details">
            <h2>{selectedMovie.name}</h2>
            {/* Display movie details here */}
            <p>Director: {selectedMovie.director}</p>
            <p>Year: {selectedMovie.year}</p>
            {/* ... other details */}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchMovie;

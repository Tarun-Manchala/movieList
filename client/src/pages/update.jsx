import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

function SearchMovie() {
  const [movies, setMovies] = useState([]);
  const [newmovies, setnewMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);
  const [movieId, setmovieId] = useState(null);

  const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [lang, setlang] = useState('');
    const [year, setyear] = useState('');
    const [rating, setRating] = useState('');

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
    setmovieId(movie._id);

  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newMovie = {
        name,
        director,
        lang,
        year: parseInt(year),
        rating: parseFloat(rating), 
    };

    try {
        const response = await axios.put(`${BASE_URL}/updateMovie/${movieId}`, newMovie);
        setSelectedMovie(response.data.data.movies)
        console.log('Movie creation response:', response.data);
        
    } catch (error) {
        console.error('Error creating movie:', error);
        
    }
};

  return (
    <>

    <div className="container">
      <div className="left">
      <h1>update Movies</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="" className="input-tag">
        <input
          type="text"
          placeholder="Enter movie name"
          name="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        </label>
        <div className="item-tag">
        <button type="submit" className='btn'>Search</button>
        </div>
      </form>

      {error && <p className="error">{error}</p>}
      {movieId && (
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
      )}
      </div>

      <div className="right">
      <div className="options">
        <h3>Which one you want to update</h3>
      <ul>
        {newmovies.length > 0 ? (
          newmovies.map((movie) => (
            <li key={movie.id} className="link" onClick={() => handleMovieSelect(movie)}>
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
    </div>

    </>
  );
}

export default SearchMovie;
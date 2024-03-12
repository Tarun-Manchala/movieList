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
            const response = await axios.post('http://localhost:5000/addMovie', newMovie);
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
            <label>
                Director:
                <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
            </label>
            <label>
                lang:
                <input type="text" value={lang} onChange={(e) => setlang(e.target.value)} />
            </label>
            <label>
                Released Year:
                <input type="number" value={year} onChange={(e) => setyear(e.target.value)} />
            </label>
            <label>
                Rating:
                <input type="number" min="0" max="10" value={rating} onChange={(e) => setRating(e.target.value)} />
            </label>
            <button type="submit">Add Movie</button>
            <Link to="/allMovies"> check the Updated List</Link>
        </form>
    );
}

// function MoviesList() {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         // Fetch movie data (if required)
//     }, []);

//     return (
//         <div>
//             <AddMovieForm />  {/* Add the movie form here */}
//             {/* Display movie list if applicable */}
//         </div>
//     );
// }

export default AddMovieForm;


// import React from "react";
// import Header from "../utils/Header/Header";
// import Footer from "../utils/Footer/Footer";
// import {Link} from "react-router-dom";
// import "./Add.css"

// function Add(){
//     return (
//         <>
//         <Header />
//         <div className="container">
//         {/* <div className="movie"> */}
//         <form action="/allMovies" method="get" className="movie">
//         <div className="item">
//           <label for="name" className="item-tag">Name :</label>
//           <input type="text" className="item-input" id="name" name="name" placeholder="Enter your name" required />
//         </div>

//         <div className="item">
//         <label for="Director" className="item-tag">Director :</label>
//         <input type="text"  className="item-input" id="director" name="director" placeholder="Enter your director" required />
//         </div>

//         <div className="item">
//         <label for="lang" className="item-tag">lang :</label>
//         <input type="text" className="item-input"  id="lang" name="lang" placeholder="Enter your lanfg" required />
//         </div>

//         <div className="item">
//         <label for="year" className="item-tag">released :</label>
//         <input type="number" className="item-input"  id="year" name="year" placeholder="Enter your name" required />
//         </div>

//         <div className="item">
//         <label for="rating" className="item-tag">lang :</label>
//         <input type="number"  className="item-input" id="rating" name="rating" placeholder="Enter your name" required />
//         </div>

//         <div className="item">
//         <button type="submit" className="btn">Submit</button>
//         </div>
//           </form>
//           {/* </div> */}
//           </div>
//           <Link to="/allMovies">all movies</Link>

//           <Footer />
//         </>
//     );
// }

// export default Add;
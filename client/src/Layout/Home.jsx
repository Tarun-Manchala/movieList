import React from "react";
import {Link} from "react-router-dom"
import Navbar from "../components/navbar";
import "./Home.css"

function Home() {

  return (
    <>
    <div className="container">
    <div className="left">

        
        <h2>CRUD Operations</h2>
        <div className="inner-body">
          <Link to="/allMovies" className="link">All movies</Link>
        </div>

        <div className="inner-body">
                <Link to="/add" className="link">Add Movie</Link>
          
        </div>

        <div className="inner-body">
          <Link to="/search"className="link" >search Movie</Link>
        </div>

        <div className="inner-body">
          <Link to="/update" className="link">Update Movie</Link>
        </div>

        <div className="inner-body">
          <Link to="/delete" className="link">Delete Movie</Link>
        </div>
    </div>

        <div className="right">
            <h1>Search movies by : </h1>

              <div className="inner-body">
          <Link to="/name" className="link">Name</Link>
              </div>

              <div className="inner-body">
          <Link to="/director" className="link">Director</Link>
              </div>

              <div className="inner-body">
          <Link to="/lang" className="link">Language</Link>
              </div>

              <div className="inner-body">
          <Link to="/year" className="link">Release year</Link>
              </div>

              <div className="inner-body">
          <Link to="/rating" className="link">Rating</Link>
              </div>
            
         </div>
    </div>
      
    </>
  );
}

export default Home;

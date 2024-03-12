import React from "react";
import Header from "../../utils/Header/Header";
import Footer from "../../utils/Footer/Footer";
import {Link} from "react-router-dom"
import "./Home.css";

function Home() {

  return (
    <>
      <Header />
      <div className="body">
        
        <div className="inner-body">
          <Link to="/allMovies">All movies</Link>
        </div>

        <div className="inner-body">
                <Link to="/add" >Add Movie</Link>
          
        </div>

        <div className="inner-body">
          <Link to="/search" >search Movie</Link>
        </div>

        <div className="inner-body">
          <Link to="/update" >update Movie</Link>
        </div>
        

        <div className="inner-body">
          <form action="/deleteMovies" method="delete">
                <button className="btn">delete movie</button>
          </form>
        </div>

        <div className="inner-body custom">

            <h3>Search movies by : </h3>

            <div className="criteria">
          <form action="/movies-by-name" method="get">
                <button className="btn">Name</button>
          </form>
          <form action="/movies-by-director" method="get">
                <button className="btn">director</button>
          </form>
          <form action="/movies-by-year" method="get">
                <button className="btn">Relese year</button>
          </form>
          <form action="/movies-by-lang" method="get">
                <button className="btn">Language</button>
          </form>
          <form action="/movies-by-rating" method="get">
                <button className="btn">Rating</button>
          </form>
          </div>

        </div>

      </div>
      <Footer />
    </>
  );
}

export default Home;

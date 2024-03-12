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
       <div className="left">
        <h1>CRUD Operations</h1>
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

            <div className="criteria">

              <div className="inner-body">
          <Link to="/delete" className="link">Name</Link>
              </div>

              <div className="inner-body">
          <Link to="/delete" className="link">Director</Link>
              </div>

              <div className="inner-body">
          <Link to="/delete" className="link">Language</Link>
              </div>

              <div className="inner-body">
          <Link to="/delete" className="link">Release year</Link>
              </div>

              <div className="inner-body">
          <Link to="/delete" className="link">Rating</Link>
              </div>
          {/* <form action="/movies-by-name" method="get">
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
          </form> */}
          </div>

        </div>
    </div>
      
      <Footer />
    </>
  );
}

export default Home;

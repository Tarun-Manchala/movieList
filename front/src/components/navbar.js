import React from "react";
import {Link} from "react-router-dom"

const Navbar = ()=>{
    return(
        <>
        <div className="inner-body">
          <Link to="/" className="link">Home</Link>
        </div>
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
        </>
    );
}
export default Navbar;
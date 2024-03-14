import React from "react";
import {Link} from "react-router-dom"

function Home() {

  return (
    <>
            <div className="criteria">
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
      
    </>
  );
}

export default Home;

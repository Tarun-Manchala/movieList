import React from "react";
import Header from "../utils/Header/Header";
import Footer from "../utils/Footer/Footer";

function updateMovie(){
    return (
        <>
        <Header />
        <div className="movie">

        <h1> Updating Details</h1>

        <form action="/update" method="put">

        <label for="name" className="item-tag">Old Movie Name:</label>
        <input type="text" id="name" className="item-input" name="name" placeholder="Enter movie name" required />



        <label for="name" className="item-tag">Name:</label>
        <input type="text" id="name" className="item-input"  name="name" placeholder="Enter new name" required />

        <label for="Director"  className="item-tag">Director:</label>
        <input type="text" id="director" className="item-input"  name="director" placeholder="Enter your director" required />

        <label for="lang" className="item-tag">lang:</label>
        <input type="text" id="lang" className="item-input"  name="lang" placeholder="Enter your lanfg" required />

        <label for="year" className="item-tag">released:</label>
        <input type="text" id="year" className="item-input"  name="year" placeholder="Enter your name" required />

        <label for="rating" className="item-tag">lang:</label>
        <input type="text" id="rating" className="item-input"  name="rating" placeholder="Enter your name" required />

        <button type="submit" className="btn">Search</button>
          </form>
          </div>

          <Footer />
        </>
    );
};

export default updateMovie;
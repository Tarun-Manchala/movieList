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

        <label for="name">Old Movie Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter movie name" required />



        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter new name" required />

        <label for="Director">Director:</label>
        <input type="text" id="director" name="director" placeholder="Enter your director" required />

        <label for="lang">lang:</label>
        <input type="text" id="lang" name="lang" placeholder="Enter your lanfg" required />

        <label for="year">released:</label>
        <input type="text" id="year" name="year" placeholder="Enter your name" required />

        <label for="rating">lang:</label>
        <input type="text" id="rating" name="rating" placeholder="Enter your name" required />

          </form>
          </div>

          <Footer />
        </>
    );
};

export default updateMovie;
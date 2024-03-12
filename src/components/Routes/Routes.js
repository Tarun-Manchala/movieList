import React from "react";
// import {} from "react-router";
import Add from "../pages/add";
import Update from "../pages/update";
import Search from "../pages/search";
import Movieslist from "../Layout/allmovies"
import DeleteMovie from "../pages/delete"

import Name from "../pages/name";
import Director from "../pages/director"
import Lang from "../pages/lang"
import Year from "../pages/release";
import Rating from "../pages/rating";

import Home from "../Layout/Home/Home";


import { BrowserRouter, Route, Routes } from "react-router-dom";

function routes() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="/search" element={< Search />} />
          <Route path="/allMovies" element={< Movieslist />} />
          <Route path="/delete" element={< DeleteMovie />} />

          <Route path="/name" element={< Name />} />
          <Route path="/director" element={< Director />} />
          <Route path="/lang" element={< Lang />} />
          <Route path="/year" element={< Year />} />
          <Route path="/rating" element={< Rating />} />

          {/* <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} /> */}
          
        </Routes>
      </BrowserRouter>
    )
}

export default routes;
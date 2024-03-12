const express = require("express");
const postcontroller = require("../controllers/postcontroller")
const getcontroller = require("../controllers/getcontroller")

const router = express.Router();

router.get("/allMovies",getcontroller.allMovies);

// router.get("/by-name",getcontroller.name);
// router.get("/by-director",getcontroller.director);
// router.get("/by-rating",getcontroller.rating);
// router.get("/by-year",getcontroller.year);
// router.get("/by-lang",getcontroller.lang);

router.get("/searchMovie",getcontroller.searchMovie);

router.post("/addMovie",postcontroller.addMovie);

router.put("/updateMovie/:id",postcontroller.updateMovie);

router.delete("/deleteMovie/:id",postcontroller.deleteMovie);

module.exports = router
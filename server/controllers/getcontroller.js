const Movies = require("../models/movies");

exports.allMovies = async (req,res,next) =>{
    try{
        const movies = await Movies.find();
        res.status(200).json({
            status: " success",
            results: movies.length,
            data:{
                movies,
            },
        });
    }
    catch(e){
        res.status(400).json({
            status: "fail",
        })
    }
}
exports.searchMovie = async (req,res,next) =>{
    try{
        const movies = await Movies.find();
        // const {movieName} = req.body;
        const searchTerm = req.query.name.toLowerCase();
        const filteredMovies = movies.filter((movie) => movie.name.toLowerCase().includes(searchTerm));
  res.json(filteredMovies);

        res.status(200).json({
            status: " success",
            results: movies.length,
            data:{
                filteredMovies,
            },
        });
    }
    catch(e){
        res.status(400).json({
            status: "fail",
        })
    }
}
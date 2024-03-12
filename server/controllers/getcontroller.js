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
        const {movieName} = req.body;
        

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
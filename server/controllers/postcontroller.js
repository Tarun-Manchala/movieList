const Movies = require("../models/movies");

exports.addMovie = async (req,res,next) =>{
    try{
        
        const movies = await Movies.create(req.body);
       
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
            status: "it fails",
        })
    }
};

exports.updateMovie = async (req,res,next)=>{
    try {
        const movies = await Movies.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data:{
                movies,
            },
        });
    } catch (e){
        res.status(400).json({
            status: "fail",
        });
    }
};

exports.deleteMovie = async (req,res,next) =>{
    try {
        const movies = await Movies.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success',
        });
    } catch (e){
        res.status(400).json({
            status: "fail",
        });
    }
};
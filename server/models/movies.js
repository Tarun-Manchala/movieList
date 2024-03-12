const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "movie must have a name"],
    },
    director: {
        type: String,
        required: [true, "movie must have a director"],
    },
    lang: {
        type: String,
        required: [true, "movie must have a language"],
    },
    year: {
        type: Number,
        required: [true, "movie must have a date"],
    },
    rating: {
        type: Number,
        required: [true, "movie must have a name"],
    },
});

const Movies = mongoose.model("Movies",movieSchema);
module.exports = Movies;
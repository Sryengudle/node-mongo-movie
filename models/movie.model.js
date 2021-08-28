const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MovieSchema = new Schema({
    genres: { type: String, required: true },
    name: { type: String, required: true },
    // mobile: { type: Number, required: true },
    // dob: { type: String, required: true },
    time: { type: String, required: true },
    day: { type: String, required: true },
    language: { type: String, required: true },
    location: { type: String, required: true }
});

//Export the model
module.exports = mongoose.model('Movie', MovieSchema);

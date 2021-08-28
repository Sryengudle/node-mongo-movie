const mongoose = require('mongoose');
const CONNECTION_URL = "mongodb://localhost:27017/demo_movie_db";

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true }).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

const cors = require("cors");

const express = require('express')
const movie = require('./routes/movie.route'); //imports routes
const app = express()
const port = 8080

let corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());  /* bodyParser.json() is deprecated */

app.use(express.urlencoded({ extended: true }));

app.use('/api/movies', movie);


app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
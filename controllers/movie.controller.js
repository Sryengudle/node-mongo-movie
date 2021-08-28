const Movie = require('../models/movie.model');

exports.create = function (req, res) {
    let movie = new Movie(
        {
            genres: req.body.genres,
            name: req.body.name,
            time: req.body.time,
            day: req.body.day,
            language: req.body.language,
            location: req.body.location
        }
    );
    movie
        .save(movie)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Record."
            });
        });
};

exports.findAll = (req, res) => {
    Movie.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        });
};

exports.getByGenresName = function (req, res) {
    Movie.find({ genres: req.query.name })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data."
            });
        });
};

exports.update = function (req, res) {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    Movie.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Movie with id=${id}. Maybe Movie was not found!`
                });
            } else res.send({ message: "Movie was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Movie with id=" + id
            });
        });

};

exports.delete = function (req, res) {
    const id = req.params.id;
    Movie.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
                });
            } else {
                res.send({
                    message: "Movie was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Movie with id=" + id
            });
        });
};
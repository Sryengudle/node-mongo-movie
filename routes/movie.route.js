const express = require('express');
const router = express.Router();
const movie_controller = require('../controllers/movie.controller');

router.post('/', movie_controller.create);
router.get('/', movie_controller.findAll);
router.get('/genres/:name', movie_controller.getByGenresName);
router.put('/:id', movie_controller.update);
router.delete('/:id', movie_controller.delete);
module.exports = router;
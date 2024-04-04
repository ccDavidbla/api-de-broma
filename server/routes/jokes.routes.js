const JokeController = require('../controllers/jokes.controller.js');

module.exports = function (app) {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.put('/api/jokes/update/:id', JokeController.updateExistingJoke);
    app.delete('/api/jokes/delete/:id', JokeController.deleteAnExistingJoke);
}

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_db', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
    .then(() => console.log("Conectado con MongoDB"))
    .catch(err => console.log("Falló la conexión con MongoDB", err));

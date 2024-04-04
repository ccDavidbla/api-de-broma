const express = require('express');
const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Config
require('./server/config/mongoose.config');

// Routes
require('./server/routes/jokes.routes')(app);

app.listen(port, () => console.log(`The server is all fired up on port ${port}`));

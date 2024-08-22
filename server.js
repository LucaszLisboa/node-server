const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('./auth/webToken');
const session = require('express-session');

require('dotenv').config();

const secretKey = "your-secret-key";
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
  }));

const movieController = require('./controller/movieController');
const authController = require('./controller/authController');

app.post('/login', authController.login);

app.get('/emAlta', jwt.verifyJWT, movieController.getMoviesEmAlta);

app.get('/originaisNetflix', movieController.getMoviesOriginaisNetflix);

app.get('/populares', movieController.getMoviesPopulares);

app.get('/comedias', movieController.getMoviesComedias);

app.get('/romances', movieController.getMoviesRomances);

app.get('/documentarios', movieController.getMoviesDocumentarios);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
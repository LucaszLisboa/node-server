const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());

const controller = require('./controller/movieController');

app.get('/emAlta', controller.getMoviesEmAlta);

app.get('/originaisNetflix', controller.getMoviesOriginaisNetflix);

app.get('/populares', controller.getMoviesPopulares);

app.get('/comedias', controller.getMoviesComedias);

app.get('/romances', controller.getMoviesRomances);

app.get('/documentarios', controller.getMoviesDocumentarios);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
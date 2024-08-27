const movieService = require('../services/movieService');

exports.getMoviesEmAlta = async (req, res) => {
  try {
    const movies = await movieService.getMoviesEmAlta(req.session);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.getMoviesOriginaisNetflix = async (req, res) => {
  try {
    const movies = await movieService.getMoviesOriginaisNetflix(req.session);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.getMoviesPopulares = async (req, res) => {
  try {
    const movies = await movieService.getMoviesPopulares(req.session);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.getMoviesComedias = async (req, res) => {
  try {
    const movies = await movieService.getMoviesComedias(req.session);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.getMoviesRomances = async (req, res) => {
  try {
    const movies = await movieService.getMoviesRomances(req.session);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.getMoviesDocumentarios = async (req, res) => {
  try {
    const movies = await movieService.getMoviesDocumentarios(req.session);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
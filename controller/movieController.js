const movieService = require('../services/movieService');

exports.getMoviesEmAlta = async (req, res) => {
  try {
    const movies = await movieService.getMoviesEmAlta();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
}

exports.getMoviesOriginaisNetflix = async (req, res) => {
  try {
    const movies = await movieService.getMoviesOriginaisNetflix();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
}

exports.getMoviesPopulares = async (req, res) => {
  try {
    const movies = await movieService.getMoviesPopulares();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
}

exports.getMoviesComedias = async (req, res) => {
  try {
    const movies = await movieService.getMoviesComedias();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
}

exports.getMoviesRomances = async (req, res) => {
  try {
    const movies = await movieService.getMoviesRomances();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
}

exports.getMoviesDocumentarios = async (req, res) => {
  try {
    const movies = await movieService.getMoviesDocumentarios();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
}
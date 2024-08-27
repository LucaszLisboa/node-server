const axios = require('axios');
const { findUserByID } = require('./userService');

const API_KEY = process.env.API_KEY;
const DNS = process.env.DNS;

const filterMoviesByAge = (movies, idade) => {
  if(idade < 18){
    return movies.filter(movie => movie.adult === false);
  }
  return movies;
}

const getUser = async (session) => {
  const sessionData = session;
  const user = await findUserByID(sessionData.usuarioID);
  return user;
}

exports.getMoviesEmAlta = async (session) => {
  try{
    const response = await axios.get(`${DNS}/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
    const user = await getUser(session);
    const movies = filterMoviesByAge(response.data.results, user.idade);
    return movies;
  }catch(error){
    throw new Error('Failed to fetch trending movies');
  }
}

exports.getMoviesOriginaisNetflix = async (session) => {
  try{
    const response = await axios.get(`${DNS}/discover/tv?api_key=${API_KEY}&with_networks=213`)
    const user = await getUser(session);
    const movies = filterMoviesByAge(response.data.results, user.idade);
    return movies;
  }catch(error){
    throw new Error('Failed to fetch Netflix Originals');
  }
}

exports.getMoviesPopulares = async (session) => {
  try{
    const response = await axios.get(`${DNS}/movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
    const user = await getUser(session);
    const movies = filterMoviesByAge(response.data.results, user.idade);
    return movies;
  }catch(error){
    throw new Error('Failed to fetch popular movies');
  }
}

exports.getMoviesComedias = async (session) => {
  try{
    const response = await axios.get(`${DNS}/discover/tv?api_key=${API_KEY}&with_genres=35`)
    const user = await getUser(session);
    const movies = filterMoviesByAge(response.data.results, user.idade);
    return movies;
  }catch(error){
    throw new Error('Failed to fetch comedy movies');
  }
} 

exports.getMoviesRomances = async (session) => {
  try{
    const response = await axios.get(`${DNS}/discover/tv?api_key=${API_KEY}&with_genres=10749`)
    const user = await getUser(session);
    const movies = filterMoviesByAge(response.data.results, user.idade);
    return movies;
  }catch(error){
    throw new Error('Failed to fetch romance movies');
  }
}

exports.getMoviesDocumentarios = async (session) => {
  try{
    const response = await axios.get(`${DNS}/discover/tv?api_key=${API_KEY}&with_genres=99`)
    const user = await getUser(session);
    const movies = filterMoviesByAge(response.data.results, user.idade);
    return movies;
  }catch(error){
    throw new Error('Failed to fetch documentary movies');
  }
}
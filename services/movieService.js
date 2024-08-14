const axios = require('axios');

const API_KEY = process.env.API_KEY;
const DNS = process.env.DNS;

exports.getMoviesEmAlta = async () => {
  try{
    const response = await axios.get(`${DNS}/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
    return response.data.results;
  }catch(error){
    console.error(error);
  }
}

exports.getMoviesOriginaisNetflix = async () => {
  try{
    const response = await axios.get(`${DNS}/discover/tv?api_key=${API_KEY}&with_networks=213`)
    return response.data.results;
  }catch(error){
    console.log(error)
  }
}

exports.getMoviesPopulares = async () => {
  try{
    const response = await axios.get(`${DNS}/movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
    return response.data.results;
  }catch(error){
    console.log(error)
  }
}

exports.getMoviesComedias = async () => {
  try{
    const response = await axios.get(`${DNS}/discover/tv?api_key=${API_KEY}&with_genres=35`)
    return response.data.results;
  }catch(error){
    console.log(error)
  }
} 

exports.getMoviesRomances = async () => {
  try{
    const response = await axios.get(`${DNS}/discover/tv?api_key=${API_KEY}&with_genres=10749`)
    return response.data.results;
  }catch(error){
    console.log(error)
  }
}

exports.getMoviesDocumentarios = async () => {
  try{
    const response = await axios.get(`${DNS}/discover/tv?api_key=${API_KEY}&with_genres=99`)
    return response.data.results;
  }catch(error){
    console.log(error)
  }
}
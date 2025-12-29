import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',

});

export default api;

//Base URL da API : https://api.themoviedb.org/3/
//https://api.themovied-b.org/3/movie/now_playing?api_key=839b46ca530576bc268f9d4f660bcd50&language=pt-BR


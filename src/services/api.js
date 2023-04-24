import axios from "axios";

const API = "https://api.themoviedb.org/3";
export const patch = "https://image.tmdb.org/t/p/original";
export const key = "37cc1bd50172ba44f5d16495f8e4a993";
export const idioma = "language=es-ES";
export const services = axios.create({
  baseURL: API,
});

const API_URL = process.env.REACT_APP_API_URL;
const service = axios.create({
  baseURL: API_URL,
});
export default service;

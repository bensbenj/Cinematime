// The Movie DB API

import axios from "axios";
const TMDB_KEY = process.env.TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";

var link = ( baseUrl, mediaType, cinemaId ) => {
    return `${ baseUrl }/${ mediaType }/${ cinemaId }`;
}

export const popular = ( mediaType, pages ) => {
    return axios.get(`${ baseUrl }/${ mediaType }/popular?api_key=${ TMDB_KEY }&language=fr-FR&page=${ pages }`)
        .then(response =>  response.data);
}

export const trending = ( mediaType, pages ) => {
    return axios.get(`${ baseUrl }/trending/${ mediaType }/day?api_key=${ TMDB_KEY }&language=fr-FR&page=${ pages }`)
        .then(response => response.data);
}

export const discover = ( mediaType, pages, filter) => {
    return axios.get(`${ baseUrl }/discover/${ mediaType }?api_key=${ TMDB_KEY }&language=fr-FR&page=${ pages }&with_genres=${ filter }`)
        .then(response => response.data);
}

export const findById = ( mediaType, cinemaId ) => {
    return axios.get(link(baseUrl, mediaType, cinemaId) + `?api_key=${ TMDB_KEY }&language=fr-FR`)
        .then(response => response.data);
}

export const cinemaSimilar = ( mediaType, cinemaId ) => {
    return axios.get(link(baseUrl, mediaType, cinemaId) + `/similar?api_key=${ TMDB_KEY }&language=fr-FR`)
        .then(response => response.data);
}

export const videoPreview = ( mediaType, cinemaId ) => {
    return axios.get(link(baseUrl, mediaType, cinemaId) + `/videos?api_key=${ TMDB_KEY }&language=fr-FR`)
        .then(response => response.data);
}

export const search = ( query ) => {
    return axios.get(`${ baseUrl }/search/multi?query=${ query }&api_key=${ TMDB_KEY }&language=fr-FR&page=1`)
        .then(response => response.data);
}

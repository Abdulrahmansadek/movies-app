const key = "29ef7099fc297bf2293df917f14dbe45";
export const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}&page=1`;
export const imgMovies = "https://image.tmdb.org/t/p/w1280";
export const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query="`;
export const mostPopularUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`;
export const upComing = `
https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`;

export const form = document.getElementById("form");
export const search = document.querySelector(".search");
export const main = document.getElementById("main");
export const slider = document.querySelector(".posters");
export const movie = document.querySelector(".movie");
export const popularMovies = document.getElementById("most-popular");
export const coming = document.getElementById("upcoming");

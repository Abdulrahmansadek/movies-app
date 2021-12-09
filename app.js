import {
  url,
  imgMovies,
  searchUrl,
  form,
  main,
  search,
  mostPopularUrl,
  popularMovies,
  upComing,
  coming,
} from "./constent.js";

getMovie(url);

async function getMovie(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovie(data.results);
}

function showMovie(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const {
      title,
      vote_average,
      overview,
      poster_path,
      release_date,
      original_language,
    } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = ` 
    <img src='${imgMovies + poster_path}' alt="" />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getAvg(vote_average)}">${vote_average}</span>
    </div>
    <div class="over-view">
      <h3>Overview</h3>
      ${overview}
    </div>
  `;
    main.appendChild(movieEl);

    movieEl.addEventListener("click", () => {
      main.innerHTML = "";
      const movieDetailes = document.createElement("div");
      movieDetailes.innerHTML = ` <div class="posters">
     
      <div class='overview-container'><img src="${
        imgMovies + poster_path
      }" alt="">
   
      <ul class="extra">
      <li> <h1>${title}</h1></li>
    <li> <p> ${overview}</p></li>
     <li> Release Date: ${release_date}<br>
     Language: ${original_language}</li>
     </ul>
    
     </div>
    `;
      main.appendChild(movieDetailes);
      movieDetailes.classList.remove("posters");
    });
  });
}

function getAvg(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovie(searchUrl + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});

popularMovies.addEventListener("click", () => {
  main.innerHTML = "";
  popularMovies.style.color = "yellow";
  getMovie(mostPopularUrl);
});
coming.addEventListener("click", () => {
  main.innerHTML = "";
  popularMovies.style.color = "white";
  coming.style.color = "yellow";
  getMovie(upComing);
});

const API_KEY = "89c70d0401c8471ace31f88b910df57c";
const URL = "https://api.themoviedb.org/3";

export async function fetchTrending() {
  const res = await fetch(`${URL}/trending/movie/day?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results || [];
}

export async function fetchMovies(query) {
  const res = await fetch(
    `${URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();
  return data.results || [];
}

export async function fetchMovieDetails(movieID) {
  const res = await fetch(
    `${URL}/movie/${movieID}?api_key=${API_KEY}`
  );
  return res.json() || [];
}

export async function fetchMovieCredits(movieID) {
  const res = await fetch(
    `${URL}/movie/${movieID}/credits?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data
}

export async function fetchMovieReviews(movieID) {
  const res = await fetch(
    `${URL}/movie/${movieID}/reviews?api_key=${API_KEY}`
  );
  const data = await res.json();
  return data
}

const API_KEY = '89c70d0401c8471ace31f88b910df57c'
const URL = 'https://api.themoviedb.org/3'

export async function fetchTrending() {
    const res = await fetch(`${URL}/trending/get-trending?api_key=${API_KEY}`)
    return res.json()
}

export async function fetchMovies(query) {
    const res = await fetch(`${URL}/query=${query}/search/search-movies?api_key=${API_KEY}`)
    return res.json()
}

export async function fetchMovieDetails(movieID) {
    const res = await fetch(`${URL}/movies/${movieID}/get-movie-details?api_key=${API_KEY}`)
    return res.json()
}

export async function fetchMovieCredits(movieID) {
    const res = await fetch(`${URL}/${movieID}/movies/get-movie-credits?api_key=${API_KEY}`)
    return res.json()
}

export async function fetchMovieReviews(movieID) {
    const res = await fetch(`${URL}/${movieID}/movies/get-movie-reviews ?api_key=${API_KEY}`)
    return res.json()
}

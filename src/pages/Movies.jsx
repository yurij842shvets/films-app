import { useState, useEffect, use } from "react";
import { fetchMovies } from "../../api";
import { useSearchParams, Link } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [SearchParams, setSearchParams] = useSearchParams();
  const query = SearchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;
    fetchMovies(query).then(setMovies).catch(console.error);
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    if (value) setSearchParams({ query: value });
  }

  return (
    <>
      <h2>Films search</h2>
      <input type="text" />
      <button onSubmit={handleSubmit}>Шукати</button>

      <ul>
        {movies.length > 0
          ? movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))
          : query && <p>Film was not found</p>}
      </ul>
    </>
  );
}

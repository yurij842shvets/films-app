import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../api";

export default function Cast() {
  const { movieID } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieID).then((data) => setCast(data.cast));
  }, [movieID]);



  return (<>
  <ul>
    {cast.map(actor => (
        <li key={actor.id}>
            <img src={
              actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : `https://via.placeholder.com/200x300?text=No+Image`
            } alt={actor.name} />
            <p>{actor.name}</p>
            <p>Actor: {actor.character}</p>
        </li>
    ))}
  </ul>
  </>);
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../api";

export default function Cast() {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(moviesId).then((data) => setCast(data.cast));
  }, [moviesId]);



  return (<>
  <ul>
    {cast.map(actor => {
        <li key={actor.id}>
            <img src="" alt="" />
            <p></p>
            <p></p>
        </li>
    })}
  </ul>
  </>);
}

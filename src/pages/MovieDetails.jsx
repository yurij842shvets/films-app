import { useEffect, useState } from "react"
import { useLocation, Link, useParams, Outlet } from "react-router-dom"
import { fetchMovieDetails } from "../../api"

export default function MovieDetails() {
    const [movie, setMovie] = useState(null)
    const {movieID} = useParams()
    const location = useLocation()

    const backLink = location.state?.from ?? "/";

    useEffect(() => {
        fetchMovieDetails(movieID).then(setMovie).catch(console.error)
    }, [movieID])

    if(!movie) return <p>Loading...</p>

    return(
        <>
        <Link to={backLink} style={{marginRight: '25px'}}>Back</Link>

        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
       
        <div>
            <h2>{movie.title}</h2>
            <p>User Score: {movie.vote_average}</p>
            <p>{movie.overview}</p>

            <h3>Genres</h3>
            <ul>
                {movie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>

        </div>

        <h3>Additional information</h3>
 
        <ul>
            <li>
                <Link to={`/movies/${movieID}/cast`} state={{from: backLink}}>Cast</Link>
            </li>
            <li>
                <Link to={`/movies/${movieID}/reviews`} state={{from: backLink}}>Reviews</Link>
            </li>
        </ul>
            
     <Outlet/>
        </>
    )
}
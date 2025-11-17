import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {fetchTrending} from '../../api'

export default function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetchTrending().then(setMovies).catch(console.error);
    }, [])



    return(  
        <>
            <h1>Popular films</h1>

            <ul>
                {movies?.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
import { useEffect, useState } from "react"
import { useLocation, useNavigate, Link, useParams } from "react-router-dom"
import { fetchMovieDetails } from "../../api"

export default function MovieDetails() {
    const [movie, setMovie] = useState(null)
    const {movieID} = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        fetchMovieDetails(movieID).then(setMovie).catch(console.error)
    }, [movieID])

    if(!movie) return <p>Завантаження...</p>

    return(
        <>
            <button>

            </button>

            <h2></h2>
            {
                <img src="" alt="" />
            }

            
        </>
    )
}
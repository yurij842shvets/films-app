import {useState, useEffect} from 'react'
import {fetchMovieReviews} from '../../api'
import { useParams } from 'react-router-dom'


export default function Reviews() {
    const {movieID} = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetchMovieReviews(movieID).then(data => setReviews(data.results))
    }, [movieID])

    if(reviews.length === 0) return <p>No reviews found</p>

    return(
        <>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <h3>Author: {review.author}</h3>
                        <p>{review.content}</p>
                    </li>

                ))}
            </ul>
        </>
    )
}
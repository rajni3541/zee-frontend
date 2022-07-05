import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import MovieDetailCard from './MovieDetailCard';
const MovieDetails = () => {

    const params = useParams()
    const [movie, setmovie] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/zee5/user/getMovie/${params.movie_code}`)
        .then(res => setmovie(res.data))
    })
    

  return (
    <>
        {
          movie.map((movies,index)=><MovieDetailCard
          key={index}
          title={movies.title}
          movie_code={movies.movie_code}
          released={movies.release_date}
          director={movies.director}
          produer={movies.producer}
          actors={movies.actors}
          audio_language={movies.audio_language}
          />)
        }
    </>
  )
}

export default MovieDetails
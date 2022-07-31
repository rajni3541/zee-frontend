import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import MovieDetailCard from './MovieDetailCard';
import {connect} from 'react-redux';
import { setMovies } from '../redux/movies/movies.action';

const MovieDetails = ({setMovies, getMovies}) => {

    // const params = useParams()
    // const [movie, setmovie] = useState([])

    useEffect(() => {
        // axios.get(`http://localhost:8000/zee5/user/getMovie/${params.movie_code}`)
        axios.get(`http://localhost:8000/zee5/user/getAllMovie`)
        .then(res => {
          setMovies(res.data);
        })
    })
    

  return (
    <>
        {
          getMovies.map((movies,index)=><MovieDetailCard
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

const mapStateToProps = (state) => {
  return {
    getMovies: state.movies.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMovies: (movies) => dispatch(setMovies(movies))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
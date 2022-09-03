import Search from "../components/Search";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/movieCard";
import dayjs from "dayjs";
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

const HomePage = ( ) => {
  const [sortBy, setSortBy] = useState('')
  const navigate = useNavigate();
  const [movie, setmovie] = useState([]);
  const [input, setInput] = useState([]);
  let sortedMovies = movie;
  
  useEffect(() => {
    axios
      .get("http://localhost:8000/zee5/user/getAllMovie")
      .then((res) => setmovie(res.data));
      
    // console.log(movie.data)
  }, []);

  useEffect(() => {
    console.log(movie);
  }, [movie]);


  const sortByTitle = () => {
    // setmovie(sortedMovies.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
    const movies =[...movie]
    const updatedMovies = movies.sort((a, b) => a.title.toLowerCase()  > b.title.toLowerCase() ? 1 : -1)
    setmovie(updatedMovies);
    console.log(movie);
  }

  const sortByDate = () => {
    const movies =[...movie]
    const updatedMovie = movies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
    setmovie(updatedMovie);
    console.log(movie);
  }

  const sortByMovieCode = () => {
    const movies =[...movie]
    const updatedMovies = movies.sort((a, b) => a.movie_code.toLowerCase() > b.movie_code.toLowerCase() ? 1 : -1)
    setmovie(updatedMovies);
    
    console.log(movie);
  }



  const handleFilterName = (name) => {
    const filteredData = movie.filter((item) => {
      const movieName = `${item.title}`;
      if (movieName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    setInput(filteredData);
  };

  const handleFilterDate = (date, field) => {
    const filteredData = movie.filter((item) => {
      if (
        field === "from" &&
        dayjs(item.release_date).isSameOrAfter(dayjs(date))
      ) {
        return item;
      }
      if (
        field === "to" &&
        dayjs(item.release_date).isSameOrBefore(dayjs(date))
      ) {
        return item;
      }
    });

    setInput(filteredData);
  };

  const handleFilterToDate = (date, field) => {
    const filteredData = movie.filter((item) => {
      if (
        field === "to" &&
        dayjs(item.release_date).isSameOrBefore(dayjs(date))
      ) {
        return item;
      }
    });

    setInput(filteredData);
  };

  

  return (
    <>
      <div className="App">
        <Search
          searching={handleFilterName}
          dateFilter={handleFilterDate}
          dateToFilter={handleFilterToDate}
        />
        <br />
        <br />
        <div style={{ maxWidth: '50%', marginInline: 'auto', display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <Button style={{ background: 'purple', color: 'white', fontWeight: 'bold' }} onClick={() => navigate('/addMovie')}>Add Movie</Button>
          {/* <Button style={{background: 'purple', color: 'white', fontWeight: 'bold'}} onClick={sort}>Sort</Button> */}
          <FormControl fullWidth style={{ marginInline: '2rem' }}>
            <InputLabel>Sort by</InputLabel>
            <Select value={sortBy}>
              <MenuItem value="title" 
              onClick={sortByTitle}
              >Movie Title</MenuItem>
              <MenuItem value="date"  onClick={sortByDate}>Date</MenuItem>
              <MenuItem value="code"  onClick={sortByMovieCode}>Movie Code</MenuItem>
            </Select>
          </FormControl>
          <Button style={{ background: 'purple', color: 'white', fontWeight: 'bold' }}>Filter</Button>
          <Button onClick={() => navigate('/import-excel')} style={{ background: 'purple', color: 'white', fontWeight: 'bold', marginLeft: '1rem' }}>Import Excel</Button>

         
        </div>
        {input.length !== 0 ? input.map((movies, index) => (
          <MovieCard
            key={index}
            id={movies._id}
            title={movies.title}
            movie_code={movies.movie_code}
            release_date={movies.release_date}
          />
        )) : movie.map((movies, index) => (
          <MovieCard
            key={movies._id}
            id={movies._id}
            title={movies.title}
            movie_code={movies.movie_code}
            release_date={movies.release_date}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;

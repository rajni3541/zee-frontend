import Search from "../components/Search";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/movieCard";
import dayjs from "dayjs";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

const HomePage = () => {
  const [movie, setmovie] = useState([]);
  const [input, setInput] = useState([]);
  useEffect( () => {
    axios
      .get("http://localhost:8000/zee5/user/getAllMovie")
      .then((res) => setmovie(res.data));
      // console.log(movie.data)
  });

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
      {input.length != 0 ? input.map((movies, index) => (
        <MovieCard
          key={index}
          id={movies._id}
          title={movies.title}
          movie_code={movies.movie_code}
          release_date={movies.release_date}
        />
      )):movie.map((movies, index) => ( 
        <MovieCard
          key={index}
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

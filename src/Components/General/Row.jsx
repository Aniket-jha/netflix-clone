import { useState, useEffect } from "react";
import Content from "./Content";
import axios from "../axios/axios";
import classes from "./Row.module.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_URL = "https://image.tmdb.org/t/p/original/";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      const data = response.data.results;
      setMovies(data);
      // console.log(data);
    };
    fetchData();
  }, [fetchUrl]);
  //Customizing youtube
  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // console.log(movie.name || movie.title);
      // console.log(movie);
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParameter = new URLSearchParams(new URL(url).search);
          console.log(urlParameter);
          setTrailerUrl(urlParameter.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const totalContent = movies.map((movie) => {
    return (
      <Content
        image={`${base_URL}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.name}
        key={movie.id}
        isLargeRow={isLargeRow}
        onClick={handleClick}
        movie={movie}
      />
    );
  });

  return (
    <div className={classes.row}>
      <h2>{title}</h2>
      <div className={classes.rowPosters}>{totalContent}</div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;

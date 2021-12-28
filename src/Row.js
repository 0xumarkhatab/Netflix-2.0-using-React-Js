import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
function Row(props) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  //https://www.themoviedb.org/search?query=Squid%20Game

  const [trailerURL, setTrailerURL] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchURL);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchURL]);
  const isLargeRow = props.isLarge;
  const videoOptions = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  function handleClick(theMovie) {
    if (trailerURL) {
      console.log("\nclicked " + theMovie);
      setTrailerURL("");
    } else {
      console.log("\nclicked " + theMovie);
      movieTrailer(theMovie?.name || "")
        .then((url) => {
          console.log(url);
          const urlparams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlparams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }
  return (
    <div>
      <div className="row">
        <h3>{props.title}</h3>
        <div className="row__posters">
          {movies.map((movie) => {
            return (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseURL}${
                  props.isLarge ? movie.poster_path : movie.backdrop_path
                } `}
                alt={movie.name}
              />
            );
          })}
        </div>
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={videoOptions} />}
    </div>
  );
}

export default Row;

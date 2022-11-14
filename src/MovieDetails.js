import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import * as React from "react";
import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";

export function MovieDetails({movielist}) {
  const { id }  = useParams();
  // const movie = movieList[id];
  // console.log(movieList, movie);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
    .then((data) => data.json())
    .then((mv) => setMovie(mv));
  }, []);
  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };

  const navigate = useNavigate();

  return (
    <div>
      <iframe
        width="70%" height="780"
        src={movie.trailer}
        title="Ponniyin Selvan Trailer | #PS1 Tamil | Mani Ratnam | AR Rahman | Subaskaran | Madras Talkies | Lyca"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <div className="movie-details-container">
        <div className="movie-specs">
          <h1 className="movie-name">{movie.name}</h1>
          <p style={styles} className="movie-rating">
            * {movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary} </p>
        <Button
          // startIcon = {KeyboardBackspaceIcon} 
          variant="contained"
          onClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>
  );
}

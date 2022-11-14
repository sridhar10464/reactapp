import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { Counter } from "./Counter";

// Component declaration

export function Movie({ movie, id, deleteButton, editButton }) {
  const [show, setShow] = useState(true);
  console.log(movie);
  // unary, binary, ternary
  // ternary operator
  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };

  const navigate = useNavigate();

  return (
    <Card className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <CardContent>
        <div className="movie-specs">
          <h1 className="movie-name">
            {movie.name}
            <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="Toggle summary"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              onClick={() => navigate(`/movies/${id}`)}
              color="primary"
              aria-label="Movie details"
            >
              <InfoIcon />
            </IconButton>
          </h1>
          <p style={styles} className="movie-rating"> * {movie.rating}</p>
        </div>

        {/* conditional rendering */}
        {show ? <p className="movie-summary">{movie.summary} </p> : null}
      </CardContent>
      <CardActions>
        <Counter /> {deleteButton} {editButton}
      </CardActions>
    </Card>

  );
}

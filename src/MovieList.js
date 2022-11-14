import * as React from "react";
import { Movie } from "./Movie";
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function MovieList() {

const[movies, setMovies] = useState([]);

const getMovies = () => {
  fetch(`${API}/movies`, {
    method: "GET",
  })
  .then((data) => data.json())
  .then((mvs) => setMovies(mvs));
};


  useEffect(() => getMovies(), []);

  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE"
    })
    // .then((data) => data.json())
    .then(() => getMovies());
  };
  
  const navigate = useNavigate();
  
  return (
    <div className="movie-list-container">
      {movies.map((mv, index) => (
        <Movie 
        key={mv.id} 
        movie={mv} 
        id={mv.id} 
        deleteButton = {
      <IconButton 
        color="error" 
        onClick = {() => deleteMovie (mv.id)} 
        aria-label="delete">
          <DeleteIcon />
      </IconButton>
      }

      editButton = {
      <IconButton 
        color="secondary" 
        onClick = {() => navigate (`/movies/edit/${mv.id}`)} 
        aria-label="delete">
          <EditIcon />
      </IconButton>
      }
        />
      
      ))}
    </div>
  );
}

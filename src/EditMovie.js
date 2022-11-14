// import { useParams } from "react-router-dom";
  
//   export function EditMovie() {
//     const { id } = useParams();
//     <h1>Editing movie...{id}</h1>;
//   }


import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from 'formik';
import { API } from "./global";
import * as yup from "yup";

const movieValidationSchema = yup.object({
  name: yup
    .string()
    .required("why not fill this name?"),
  poster: yup
    .string()
    .required("why not fill this poster?")
    .min(4, "Need a longer poster"),
  rating: yup
    .number()
    .required("why not fill this rating?")
    .min(0, "Need a bigger rating")
    .max(10, "Too much rating"),
  summary: yup
    .string()
    .required("why not fill this summary?")
    .min(20, "Need a longer summary"),
  trailer: yup
    .string()
    .required("why not fill this trailer?")
    .min(4, "Need a longer trailer"),
})

// Lifting the state up - move the state to a common parent
export function EditMovie() {
  const { id }  = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
    .then((data) => data.json())
    .then((mv) => setMovie(mv));
  }, []);

  return movie? <EditMovieForm movie={movie}/> : "Loading...";

}

function EditMovieForm({movie}) {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } 
  = useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        rating: movie.rating,
        summary: movie.summary,
        trailer: movie.trailer,
      },
      validationSchema: movieValidationSchema,
      onSubmit: (updatedMovie)=> {
        console.log("Form values", updatedMovie);
        editMovie(updatedMovie)
    },
    });

  const navigate = useNavigate();

  const editMovie = (updatedMovie) => {
    // // setMovieList([...movieList, newMovie]);
    // // fetch POST
    // // 1. method - POST
    // // 2. data (newmovie) - body & JSON
    // // 3. Header - JSON

    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers:{
        "Content-Type": "application/json",
      },
    }) 
      .then(() => navigate("/movies"))
      .catch((err) => console.log("Error occured", err));
  }    
  

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
        {/* {JSON.stringify (movie)} */}
      <TextField
        name="name"
        value = {values.name}
        onChange = {handleChange}
        onBlur={handleBlur}
        label="Name"
        variant="outlined"
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name: null}
      />
      <TextField
        name="rating"
        value = {values.rating}
        onChange = {handleChange}
        onBlur={handleBlur}
        label="Rating"
        variant="outlined"
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating: null}                          
      />
      <TextField
        name="poster"
        value = {values.poster}
        onChange = {handleChange}
        onBlur={handleBlur}
        label="Poster"
        variant="outlined"
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster: null}  
      />
      <TextField
        name="summary"
        value = {values.summary}
        onChange = {handleChange}
        onBlur={handleBlur}
        label="Summary"
        variant="outlined"
        error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary ? errors.summary: null} 
      />
      <TextField
        name="trailer"
        value = {values.trailer}
        onChange = {handleChange}
        onBlur={handleBlur}
        label="trailer"
        variant="outlined"
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.trailer: null} 
      />
          
      <Button color="success" type="submit" variant="contained">
        Save
      </Button>

      {/* <div>
        values
        <pre> {JSON.stringify(values)} </pre>
        Error
        <pre> {JSON.stringify(errors)} </pre>
        Touched
        <pre> {JSON.stringify(touched)} </pre> 
      </div> */}
    </form>
  );

}

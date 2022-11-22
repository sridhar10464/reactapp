
import "./App.css";
// import "bootstrap"
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import { BrowserRouter, Routes, Route, Link, Navigate, } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import Typography from "@mui/material/Typography";
// import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";
import Auth from "./Auth"
import { MovieDetails } from "./MovieDetails";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
import { AddMovie } from "./AddMovie";
import { MovieList } from "./MovieList";
import { AddColor } from "./AddColor";
import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";
import { EditMovie } from "./EditMovie";
import { BasicForm } from "./Basicform";
import { API } from "./global";


function App() {
  // const [movies, setMovies] = useState([]);

  const navigate = useNavigate();
  const [mode, setMode] = useState("dark")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  const[movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${API}/movies`)
    .then((data) => data.json())
    .then((mvs) => setMovies(mvs));
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper sx = {{ minHeight: "100vh", borderRadius: "0px"}} elevation={4}>
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick ={() => navigate("/auth")}>
            Login
          </Button>
          <Button color="inherit" onClick ={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit"onClick ={() => navigate("/movies")}>
            Movies
          </Button>
          <Button color="inherit"onClick ={() => navigate("/movies/add")}>
            Add movies
          </Button>
          <Button color="inherit"onClick ={() => navigate("/color-game")}>
            Color game
          </Button>
          <Button 
           startIcon={
             mode === "dark" ? <Brightness7Icon/> : <Brightness4Icon/>
           }
           sx = {{marginLeft: "auto"}}
            color="inherit"
            onClick ={() => setMode(mode === "light" ? "dark" : "light")}>
            {mode === "light" ? "dark" : "light"} mode
          </Button>
        </Toolbar>
      </AppBar>
      
     <section className="route-container">
      
      <Routes>
        <Route path="/auth" element={<Auth />} />   
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Navigate replace to = "/movies" />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/add" element={ <AddMovie />} />
        <Route path="/movies/edit/:id" element={<EditMovie />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/basic-form" element={<BasicForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
     </section>
    </div>
    </Paper>
    </ThemeProvider>
  
  );
}



export default App;

//JSX - Java script XML
//JSX -> HTML
//for,class -> reserved keyword (htmlFor, className)

//1. First letter must be capital
//2. It should return atleast one jsx element
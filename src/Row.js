import React, { useState, useEffect } from 'react'
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData(){
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results);
        return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars:{
        autoplay:1,
    },
  }

  const handleClick = (movie) => {
    if(trailerUrl){
        setTrailerUrl('');
    } else {
        movieTrailer(movie?.name || "")
        .then(url =>{
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
        }).catch(error => console.log(error))
    }
  }

    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
      let x = scrollX + Math.round(window.innerWidth /2);
      if(x > 0){
        x = 0;
      }
      setScrollX(x);
    }

    const handleRightArrow = () => {

      let x = scrollX - Math.round(window.innerWidth /2);
      let listW = movies.length * 150;

      if((window.innerWidth - listW) > x){
           x = (window.innerWidth - listW) -60;
      }
      setScrollX(x);
    }

  return (
    <div className="row">
        <h2>{title}</h2>

        <div className="Row_left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize:50}}/>
        </div>

        <div className="Row_right" onClick={handleRightArrow}>
          <NavigateNextIcon style={{fontSize: 50}} />
        </div>

        <div className="row_posters" style={{
          marginLeft:scrollX,
        }}>
            {movies.map(movie =>(
                <img
                key={movie.id} 
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src ={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path}
                    `} 
                    alt={movie.name}/>
            ))}
        </div>
        {trailerUrl && <YouTube videoId = {trailerUrl} opts={opts} />}
    </div>
  )
}
export default Row
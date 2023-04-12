
import Header from "../components/Header";
import { APIKey } from "../config/key";
import { useState, useEffect} from "react";


import { TiStar} from "react-icons/ti";

import './Home.css'
import { Link } from "react-router-dom";


function Home(){

    const [movies, setMovies] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500'


   useEffect(() => {
    // consumir api

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data =>{ 
            console.log(data.results) 
            setMovies(data.results)
        })


   },[])
    return(
       
        <div className="container">
            <Header />

            <h1>Filmes</h1>
            <div className="MovieList">

                {movies.map(movie => {
                    return (
                        <div className="Cards" key={movie.id}>

                            <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
                            
                            <span><h1>{movie.title}</h1></span>
                            <p><TiStar />{movie.vote_average}</p>
                        </div>
                    )
                })}


            </div>
        </div>  
     
    )
}

export default Home;
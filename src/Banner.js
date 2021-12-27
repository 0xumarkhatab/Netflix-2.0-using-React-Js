import React,{useState,useEffect} from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';
function Banner() {
    
    const [movie,setMovie]=useState([]);
    
function truncate(str,n){
return str?.length > n ? str.substr(0,n-1)+"...":str;

}


    useEffect(()=>{
           async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const oneMovie = request.data.results[
                Math.floor(Math.random() * request.data.results.length-1 ) 
            ];

            
            setMovie(oneMovie);
            return request;
      
          }
      
          fetchData();
    },[]);

    return (
        <>
        <header className="banner"
        
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition:"center center",
        }}
        >
            <div className="banner__contents">
                  <h1 className="banner__title">
                    {  movie?.name || movie?.title || movie?.original_name }
                 </h1>
                 <div className="banner__buttons">
                    <button className="banner__button">Play</button> 
                    <button className="banner__button">My List</button> 
                 </div>
                 <h1 className="banner__description">{ truncate(movie?.overview) }</h1>
            </div>
            <div class="banner--fade_bottom"></div>
  
        </header>
    </>
    )
}

export default Banner

import {useState,useEffect} from 'react'
import axios from "../axios/axios"
import request from "../axios/request"
import classes from "./Banner.module.css"
import "../../App.css"


const Banner = () => {
    const [movie,setMovie]=useState({})
    useEffect(() => {
       const fetchBanner= async ()=>{
        const response =await axios.get(request.fetchTrending)
        const randomBanner=await response.data.results[Math.floor(Math.random()*response.data.results.length-1)]
        setMovie(randomBanner)
       }
       fetchBanner()
    }, [])
    console.log(movie)
    const truncate=(str,n)=>{
        return str?.length >n ? str.substr(0,n-1)+".........more+" : str
    }
    return (
      <header className={classes.banner} style={{backgroundSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path }")`,backgroundPosition:"center center"}}>
          <div className={classes.bannerContent}>
              <h1 className={classes.title}>{movie?.title || movie?.name || movie?.original_name}</h1>
              <div className={classes.buttons}>
                  <button className={classes.button}>
                    Play
                  </button>
                  <button className={classes.button} >
                    My List
                  </button>
                  <h1 className={classes.description}>
                      {truncate(movie?.overview,150)}
                  </h1>
              </div>  
          </div>
          <div className="banner--fadeBottom" />
      </header>
    )
}

export default Banner

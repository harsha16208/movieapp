import { useContext,useEffect,useState } from "react";
import {moviedata} from "../../App" 
import MovieDetailsContainer from "./MovieDetailsContainer";

export default function MovieDetails({match})
{
    const data=useContext(moviedata)
    const[movie,setMovie]=useState({})
    const[load,setLoad]=useState(false)
    useEffect(()=>{
        const getMoviedata=()=>{
            const moviedata = data.filter(movie=>{
                return parseInt(movie.show.id) === parseInt(match.params.id)
            })
            setMovie(moviedata[0])
        }
        getMoviedata()
        setLoad(true)
    },[])       
    
    const r1=<MovieDetailsContainer movie={movie}/>

    const r2=<div></div>
    return load?r1:r2
}
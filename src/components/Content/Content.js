import {useContext } from "react"
import MovieCard from "../MovieCard/MovieCard"
import {moviedata} from "../../App" 

export default function Content()
{
    
    const data=useContext(moviedata)
    return (
        <div>
        {
               data.map(movie=>{
                    return (
                    <MovieCard  key={movie.show.id} img={movie.show.image.medium} name={movie.show.name} id={movie.show.id}></MovieCard>
                   )
               })
           }
        </div>

    )
}
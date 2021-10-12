import "./MovieCard.css"
import { MovieCardContainer} from "./MovieCardStyles"
import {GetDetails} from "./MovieCardStyles"

export default function MovieCard({img,name,id}){

    const path="/details/"+id
    return (
    <MovieCardContainer style={{float:"left"}}>
        <img src={img} alt="" style={{height:"90%",padding:"20px"}}></img>
        <div className="movie_details_styles">
            Name: {name}
            </div>
        <GetDetails to={path}>GetDetails</GetDetails>
    </MovieCardContainer>
)
}


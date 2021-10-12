import { DetailsContainer,SummaryContainer,Title,ImageContainer,BasicInfo,BookTicketButton } from "./MovieDetailsStyles";
import Modal from "./Modal"
import {useState} from "react"

export default function MovieDetailsContainer({movie})
{
    const[open,setOpen]=useState(false)
    function handler(){
        setOpen(false)
    }
    return (
        <DetailsContainer>
            <ImageContainer>
            <img src={movie.show.image.medium} alt="" />
            </ImageContainer>
            <Title>
            {movie.show.name}
            </Title>
            <SummaryContainer>
                {movie.show.summary}
            </SummaryContainer>
        <BasicInfo>
                <tbody>
                    <tr>
                        <td>
                            Language
                        </td>
                        <td>{movie.show.language}</td>
                    </tr>
                    <tr>
                        <td>Genre</td><td>{movie.show.genres[0]}  {movie.show.genres[1]}</td>
                    </tr>
                    <tr>
                        <td>Rating</td><td>{movie.show.rating.average}</td>
                    </tr>
                </tbody>
          </BasicInfo>
          <BookTicketButton onClick={()=>{setOpen(true)}}>
            BookTicket
          </BookTicketButton>
          {open?<Modal name={movie.show.name} handler={handler} />:''}

        </DetailsContainer>
    )
}


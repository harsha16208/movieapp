import Styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieCardContainer=Styled.div`
    background-color:#1a242f;
    width:250px;
    height:100%;
    margin:20px;
    
`;



export const GetDetails=Styled(Link)`
text-decoration:none;
font-size:22px;
display:flex;
justify-content:center;
color:orange;
background-color:#1a242f;
padding-top:10px;
padding-bottom:10px;

&:hover{
    transition:0.2s ease-in-out;
    color:white;
    background-color:orange;
    
}
`;
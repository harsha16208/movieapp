import Styled from "styled-components"

export const DetailsContainer=Styled.div`
display:flex;
justify-content:center;
overflow:hidden;
flex-direction:column;
align-items:center;
align-content:space-around;
background-color:#1a242f;
color:white;
`;

export const SummaryContainer=Styled.div`
width:100%;
font-family:serif;
font-size:21px;

`;

export const Title =Styled.div`
font-size:60px;
fonr-weight:bold;
display:flex;

`;

export const ImageContainer=Styled.div`
height:250px;
width:250px;
margin:50px;
`;

export const BasicInfo=Styled.table`
height:250px;
width:300px;
font-size:22px;
`

export const BookTicketButton=Styled.button`
background-color:orange;
color:white;
margin:10px;
width:200px;
height:50px;
font-size:22px;
font-weight:bold;
border:none;
&:hover{
    background-color:green;
}
`;
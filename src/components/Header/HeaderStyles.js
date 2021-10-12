import Styled from "styled-components"
import {Link} from "react-router-dom"

export const HeaderContainer = Styled.header`
background-color:#232F3E;
color:white;
height:80px;
display:flex;
align-items:center;
position:sticky;
top:0px;
padding:0px 20px;
`

export const Title= Styled(Link)`
    text-decoration:none;
    color:white;
    font-size:30px;
    font-width:bold;
`
//Styled Componenents
import styled from "styled-components";

//Grain 
import Grain from "../assets/noise/noise.png";

//Styles
import { colors } from "./colors";
import { primaryFont } from "./typography";

//React Router 
import { Link } from "react-router-dom";

//Exporting Background, StyledPage, StyledTitle and StyledLink
export const Background = styled.div`
   @keyframes grain {
    0%, 100% { transform:translate(0, 0) }
    10% { transform:translate(-5%, -10%) }
    20% { transform:translate(-15%, 5%) }
    30% { transform:translate(7%, -25%) }
    40% { transform:translate(-5%, 25%) }
    50% { transform:translate(-15%, 10%) }
    60% { transform:translate(15%, 0%) }
    70% { transform:translate(0%, 15%) }
    80% { transform:translate(3%, 35%) }
    90% { transform:translate(-10%, 10%) }
  };
   &:after {
     content:"";
     background-image: url(${Grain});
     height: 300%;
     width: 300%;
     opacity: 0.3;
     position: fixed;
     top: -100%;
     left: -50%;
     animation: grain 8s steps(10) infinite;
   };
`;

export const StyledPage = styled.div`
  font-family:${primaryFont};
  background-color: ${colors.backgroundColor1} ;
  width: 100%;
  heigth: 100%;
  display: flex; 
  flex-direction: column;
  align-items: center;
  color: ${colors.textColor1};
  margin: 0px;
  padding: 0px;
  overflow-x: hidden; 
`;

export const StyledTitle = styled.h1`
  font-size: 50px;
  margin-top: 80px;
  margin-bottom: 120px;
`;

export const StyledLink = styled(Link)`
z-index: 10;
color: #fff;
width: 40vw;
font-size: 1.5rem; 
text-decoration: none;
cursor: pointer; 
font-style: italic;
&:hover{
  color: #4b4c4c
}
`; 
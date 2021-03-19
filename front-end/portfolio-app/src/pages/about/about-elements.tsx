//Styled Components 
import styled from 'styled-components';

//grain 
import Grain from "../../assets/noise/noise.png";


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
  }
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
   }
  
`;

 
export const StyledPage = styled.div`
display: flex; 
flex-direction: column;
align-items: center;
background-color: #d4d4d4 ;
color: white;
width: 100%;
heigth: 100%;
margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
`;

export const StyledTitle = styled.h1`
  margin-top: 80px;
  margin-bottom: 120px;
`;

export const StyledBody = styled.div`
  margin-bottom: 180px;
  display: flex; 
  justify-content: center;
  width: 100%;
`;

export const StyledImage = styled.img`

  height: 40vh;
  margin-left: 10%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TextBlock = styled.div`
 padding-left: 60px;
 padding-right: 20px;
 margin-right: 80px;
 margin-left: 80px;
`;

export const ImageBlock = styled.div`
  margin-left: 80px;
`;

export const StyledText = styled.p`
   line-height: 1.6;
`;

export const StyledLabel = styled.label`
  font-style: italic;
  font-size: 13px;
  padding-top: 5px;
  padding-left: 10px;
`;
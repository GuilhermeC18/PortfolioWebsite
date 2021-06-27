//Styled Components 
import styled from 'styled-components';

//grain 
import Grain from "../../assets/noise/noise.png";


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
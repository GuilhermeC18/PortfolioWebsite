//Styled Components 
import styled from 'styled-components';


export const ProjectGrid = styled.div`
margin: 10px;
margin-bottom: 180px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 20px 20px;
grid-template-areas:
  ". . ."
  ". . .";
  @media screen and (max-width: 768px) {
    display:flex;
    flex-direction: column; 
  }
  
`;



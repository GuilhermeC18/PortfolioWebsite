//Styled Components 
import styled from 'styled-components';


export const FirstScreen = styled.div`
  height: 100vh;
  display: flex; 
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const StyledHomeTitle = styled.h1` 
  font-size: 80px;
  margin-top: 150px;
  @media (max-width: 768px) {
    padding-left: 25px;
    margin-top: 50px;
  }
`;

export const PortfolioPreviewSpace = styled.div`
   padding-bottom: 50px;
`;
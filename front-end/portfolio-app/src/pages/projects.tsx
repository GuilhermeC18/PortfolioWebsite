//Styled Components 
import styled from 'styled-components';

//Components 
import { NavBar } from '../components/navbar/navbar';
import { Sidebar } from '../components/Sidebar/index';
import { Footer } from '../components/footer';

//Hooks 
import { useState } from 'react';

//grain 
import Grain from "../assets/noise/noise.png";

//Project page
import ImgMediaCard from "../components/project-page";


const Background = styled.div`
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

const StyledPage = styled.div`
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

const ProjectGrid = styled.div`
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

const StyledTitle = styled.h1`
  margin-top: 80px;
  margin-bottom: 120px;
`;

interface ProjectsProps {
  Projects: {
             date: string; 
             description: string; 
             id: number; 
             images: [];
             link: string; 
             name: string; 
             technologies: [];
            }[];
  };

const ProjectsPage: React.FC<ProjectsProps> = ({Projects}) => {
  const [isOpen, setIsOpen] =useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

    return(
      <>{
        <Background>
          <StyledPage>
           
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <NavBar toggle={toggle} />
          <StyledTitle>My Projects</StyledTitle>
          
            <ProjectGrid>  
            {Projects && Projects?.map((project) => 
          <div key="projects.id">
              <ImgMediaCard Project={project}/>
          </div>   )}
            </ProjectGrid>
          <Footer />
        </StyledPage>
        </Background>}
      </>
    )
}

export default ProjectsPage;
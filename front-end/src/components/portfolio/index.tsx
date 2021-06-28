//Hooks
import { useEffect } from 'react';

//React Router 
import { Link } from "react-router-dom";

//Custom Hooks 
import useProjectsByTech from '../../hooks/useTech';

//Style Components 
import styled from 'styled-components';

//Project Card 
import ImgMediaCard from './project-card';

//Styled Elements 
import { StyledLink, StyledTitle } from "../../utils/global";

//Images Project 
import artscene from "../../assets/art-scene/art-scene.png";
import filmchain from "../../assets/film-chain/FilmChain-Analytics.png";

const Projects = [{
  name: "ArtScene",
  image: artscene,
  description: "Application that allows the user to search for art exibitions near him in Berlin. It allows filtering by time available, price and genre. It displays the results on a map with the amount of time needed for to user to reach the exibition."
}, 
 {
   name: "FilmChain Analytics",
   image: filmchain,
   description: "Analytics page for FilmChain's website. It displays a chart with different types of data about the performance of a movie. It allows the user to edit between different time-ranges and between cumulative value or individual transfers"
 }];

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20vh;
`;

const ProjectGrid = styled.div`
  display: flex; 
  gap: 50px;
  padding-bottom: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column; 
  }
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

const PortfolioPreview = () => {
    const { error, projectsByTech, onFindProjectByTech} = useProjectsByTech();
    return (
      <> 
        <TextBox>
           <StyledTitle>Web-Dev Projects</StyledTitle> 
             {Projects &&
             <ProjectGrid>
               <ImgMediaCard Project={Projects[0]} />
               <ImgMediaCard Project={Projects[1]} />
             </ProjectGrid>
             }
           
            <StyledLink to="/projects">
               Click to See All Projects...
             </StyledLink>
          </TextBox>
      </>

    )
};

export default PortfolioPreview;
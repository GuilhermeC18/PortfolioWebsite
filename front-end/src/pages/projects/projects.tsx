//Styled Components 
import styled from 'styled-components';
import { Background, StyledPage, StyledTitle } from '../../utils/global';
import { ProjectGrid } from './projectsElements';

//Components 
import { NavBar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/Sidebar/index';
import { Footer } from '../../components/footer';

//Hooks 
import { useState } from 'react';

//Project page
import ImgMediaCard from "../../components/project-page";

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



const ProjectsPage = () => {
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
          <StyledTitle>My Projects as a Web Developer</StyledTitle>
          
            <ProjectGrid>  
            {Projects && 
            <>
              <ImgMediaCard Project={Projects[0]}/>
              <ImgMediaCard Project={Projects[1]}/>
             </>}
            </ProjectGrid>
          <Footer />
        </StyledPage>
        </Background>}
      </>
    )
}

export default ProjectsPage;
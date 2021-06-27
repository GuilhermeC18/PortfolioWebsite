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
          <StyledTitle>My Projects as a Web Developer</StyledTitle>
          
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
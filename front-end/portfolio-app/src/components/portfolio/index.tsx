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

const PortfolioPreview: React.FC<ProjectsProps> = ({Projects}) => {
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
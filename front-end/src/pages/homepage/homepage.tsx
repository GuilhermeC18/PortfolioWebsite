//Styled Components 
import { FirstScreen, StyledHomeTitle, PortfolioPreviewSpace } from './homepageElements';

//Components
import { NavBar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/Sidebar/index';
import AboutMePreview from '../../components/about';
import PortfolioPreview from '../../components/portfolio';
import { Footer } from '../../components/footer';

//hooks 
import { useState } from 'react';

//elements 
import { Background } from '../../utils/global';
import { StyledPage } from '../../utils/global';

//typescript interface
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

 const Homepage: React.FC<ProjectsProps> = ({Projects}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Background>
      <StyledPage>
        <FirstScreen>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <NavBar toggle={toggle} />
          <StyledHomeTitle>Guilherme Caeiro</StyledHomeTitle>
          <AboutMePreview/>
        </FirstScreen>
        <PortfolioPreview />
        <Footer />
      </StyledPage>
    </Background>
  );
}

export default Homepage;
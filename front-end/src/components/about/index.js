

//Styled Components 
import { StyledLink } from '../../utils/global';
import { TextBox, StyledP } from './aboutElements';


export default function AboutMePreview() {
    return (
        <>
          <TextBox>
             <StyledP>I am a Portuguese Full Stack Web-Dev, Filmmaker and Photographer. Currently based in Berlin but available to work anywhere.</StyledP> 
             <StyledLink to="/about">
              Know more...
             </StyledLink>
          </TextBox>
        </>
    )
}
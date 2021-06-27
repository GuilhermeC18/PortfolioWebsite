
//Styled Elements 
import { StyledFooter,
   IconWrapper,
   StyledIconGitHub,
   StyledIconLinkedin,
   StyledIconMail,
   StyledIconTwitter,
   StyledLink,
   StyledFooterTitle } from './footerElements';


export function Footer () {
    return (
      <>
        <StyledFooterTitle>Keep in touch</StyledFooterTitle>
        <StyledFooter>
          <IconWrapper href="https://github.com/GuilhermeC18" target="_blank" rel="noopener noreferrer">
            <StyledIconGitHub size={40}/>
          </IconWrapper>
          <IconWrapper href="https://www.linkedin.com/in/guilherme-caeiro-a820882b/" target="_blank" rel="noopener noreferrer">
            <StyledIconLinkedin size={40} />
          </IconWrapper>
          <IconWrapper >
            <StyledLink to="/contact">
              <StyledIconMail size={40} />
            </StyledLink>
          </IconWrapper>
          <IconWrapper  href="https://twitter.com/GuilhermeCaeir4" target="_blank" rel="noopener noreferrer">
            <StyledIconTwitter size={40} />
          </IconWrapper>
        </StyledFooter>
      </>
    )
}
//Styled Components 
import styled from 'styled-components';

//Icons 
import { ImGithub } from 'react-icons/im';
import { AiTwotoneMail } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';

//React Router 
import { Link } from "react-router-dom";

export const StyledFooter = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-evenly;
  width: 80%;
  padding-top: 50px;
  padding-bottom: 100px;
  
`;

export const IconWrapper = styled.a`
 z-index: 10;
 color: #fff;
 cursor: pointer;
 &:visited {
  color: #fff;
  
 }
 &:active {
  color: #fff;
 }
`;

export const StyledIconGitHub = styled(ImGithub)`
   padding-right: 10px;
   &:visited {
    color: #fff;
   }
`;

export const StyledIconLinkedin = styled(AiOutlineLinkedin)`
   padding-right: 10px;
   &:visited {
    color: #fff;
   }
`;

export const StyledIconMail = styled(AiTwotoneMail)`
   padding-right: 10px;
   &:visited {
    color: #fff;
   }
`;

export const StyledIconTwitter = styled(AiFillTwitterSquare)`
   padding-right: 10px;
   &:visited {
    color: #fff;
   }
`;

export const StyledLink = styled(Link)`
  &:visited {
    color: #fff;
  }
`;

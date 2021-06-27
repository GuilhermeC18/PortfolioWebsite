import React from "react";

//Styled Elements
import {  
  StyledBody, 
  StyledImage, 
  TextBlock, 
  ImageBlock, 
  StyledText, 
  StyledLabel,
   } from './about-elements';

import { StyledPage, StyledTitle, Background } from "../../utils/global";


//Components 
import { NavBar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/Sidebar/index';
import { Footer } from '../../components/footer';

//Hooks 
import { useState } from 'react';

//Image
import AboutImg from "../../assets/brutalism/About.jpg";


export function AboutMe() {
  const [isOpen, setIsOpen] =useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return(
      <>
        <Background>
          <StyledPage>
              <Sidebar isOpen={isOpen} toggle={toggle}/>
              <NavBar toggle={toggle} />
              <StyledTitle>About Me</StyledTitle>
              <StyledBody>
                <ImageBlock>
                  <StyledImage src={AboutImg} alt="Brutalist Building" />
                  <StyledLabel>(other of my two passions are photography and brutalist architechture)</StyledLabel>
                </ImageBlock>
                <TextBlock>
                  <StyledText>I am a Full Stack Web Developer with a background in Filmmaking.
                   Currently based in Berlin, but available to work anywhere.
                   Since a very young age I was very passionate about Cinema and Technology.
                   I have professional experience ranging from different positions at Tech Startups to 
                   numerous projects in the Filmmaking/Cinema field. 
                   I am familiar with frontend technologies such as CSS3(also Bootstrap and Material-UI), Javascript ES6+, React and Redux 
                   as well as backend such as Node.js, Express, Databases(SQL, MySQL), REST API and JWT. 
                   I also have experience working with Git/Github and following agile methodologies(Scrum, Sprint Planning, User Stories). 
                   Additionally I bring an experience accross different industries, skills in visual communication, a talent for UX/UI(and
                   knowledge on how to use Figma) as well as experience with softwares such as Photoshop, Premiere and Resolve. 
                   I have a very curious mind and I am constantly learning new things. Right now my biggest interest are in the fields of Machine Learning(
                   I am looking into Python and TensorFlow) and Blockchain Development(learning Solidity). 
                   If you think we can collaborate, drop me a line or follow me on social media.
                   </StyledText>
                 </TextBlock>  
              </StyledBody>
            <Footer />
          </StyledPage>
        </Background>
      </>
    )
}
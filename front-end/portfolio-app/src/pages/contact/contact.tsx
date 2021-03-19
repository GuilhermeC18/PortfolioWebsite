//Styled Components 
import {
        Background, 
        StyledPage,
        StyledImage,
        StyledBody,
        StyledForm,
        StyledName,
        StyledEmail,
        StyledSubject,
        StyledMessage,
        NameWrapper,
        MessageWrapper,
        SubjectWrapper,
        ButtonWrapper,
        EmailWrapper,
        StyledLabel,
        StyledButton,
        StyledTitle
    } from './contactElements';

//Components 
import { NavBar } from '../../components/navbar/navbar';
import { Sidebar } from '../../components/Sidebar/index';
import { Footer } from '../../components/footer';

//Hooks 
import { useState } from 'react';
import { useForm } from 'react-hook-form';

//Email 
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';

//Image 
import ContactPic from "../../assets/brutalism/Contact.jpg";

require('dotenv').config();

export default function Contact() {
  const [isOpen, setIsOpen] =useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const { register, errors, handleSubmit, reset } = useForm();
  
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };
  
  
  
  function sendEmail(e:any):void {
    e.preventDefault();
    emailjs.sendForm('service_qysgn48', 'template_s9usab9', e.target, 'user_fzrBmP7db8AUiBspGuDyO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  

  
    return(
      <>
        <Background>
          <StyledPage>  
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle} />
            <StyledTitle>Contact Me</StyledTitle>
            <StyledBody>
              <StyledImage src={ContactPic} alt="brutalist building" />
              <StyledForm className="contact-form" onSubmit={sendEmail}>
                <NameWrapper>
                  <StyledLabel>Name</StyledLabel>
                  <StyledName type="text" name="from_name" />
                </NameWrapper>
                <EmailWrapper>
                  <StyledLabel>Email </StyledLabel>
                  <StyledEmail type="email" name="email" />
                </EmailWrapper>
                <SubjectWrapper>
                  <StyledLabel>Subject</StyledLabel>
                  <StyledSubject type="text" name="subject" />
                </SubjectWrapper>
                <MessageWrapper>
                  <StyledLabel>Message</StyledLabel>
                  <StyledMessage name="message" />
                </MessageWrapper>
                <ButtonWrapper>
                  <StyledButton type="submit" value="Send" />
                </ButtonWrapper>
              </StyledForm>
              <ToastContainer />
            </StyledBody>
            <Footer />
         </StyledPage>
        </Background>
      </>
    )
}
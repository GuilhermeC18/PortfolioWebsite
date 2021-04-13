//Styled Components 
import styled from 'styled-components';

//grain 
import Grain from "../../assets/noise/noise.png";


export const StyledImage = styled.img`
height: 80vh;
margin-left: 10%;
@media screen and (max-width: 768px) {
 display: none;
}
`;

export const StyledBody = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 180px;
width: 100vw;

`;

export const StyledForm = styled.form`
z-index: 10;
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 25% 25% 25% 25%;
gap: 40px;
margin-right: 10%;
`;

export const StyledName = styled.input`
padding-top: 10px;
margin-top: 5px;
&:focus{
 outline: 0;
}
`;


export const StyledEmail = styled.input`
padding-top: 10px;  
margin-top: 5px;
&:focus{
 outline: 0;
}
`;

export const StyledSubject = styled.input`
padding-top: 10px;
margin-top: 5px;
width: 100%;
&:focus{
 outline: 0;
}
`;

export const StyledMessage = styled.textarea`
padding-top: 10px;
margin-top: 5px;
width: 100%;
&:focus{
 outline: 0;
}
`;

export const NameWrapper = styled.div`
grid-column-start: 1;
`;

export const MessageWrapper = styled.div`
grid-row-start: 3;
grid-row-end: 4;
grid-column-start:1;
grid-column-end: 3;
`;


export const SubjectWrapper = styled.div`
grid-row-start: 2;
grid-column-start:1;
grid-column-end: 3;
`;

export const ButtonWrapper = styled.div`
grid-row-start: 4;
grid-column-end: 2;
`;

export const EmailWrapper = styled.div`
grid-column-end: 3;
`;



export const StyledLabel = styled.label`
padding: 2px;
display:block;
`;

export const StyledButton = styled.input`
display: flex;
align-items: right;
border: 1px solid black;
color: grey;
background-color: white;
box-shadow: 0 1px #999;
padding:4px;
&:focus{
 outline: 0;
 
}
&:active{
 box-shadow: 0 1px #666;
transform: translateY(1px);
}
`;

export const StyledTitle = styled.h1`
margin-top: 80px;
margin-bottom: 120px;
`;
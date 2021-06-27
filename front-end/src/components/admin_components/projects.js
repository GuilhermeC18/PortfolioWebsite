import React from 'react';

//Custom Hooks 
import useAdminProjects from '../../hooks/useAdminProjects';
import useAsyncError from '../../hooks/useAsyncError';

//React Hooks 
import { useEffect, useState } from 'react';

//Styled Components 
import { Item } from '../input';
import styled from 'styled-components';

//Components 
import { AddProject } from './addproject';

//Material-UI
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';


//Toastify
import {toast} from 'react-toastify';

const StyledImg = styled.img`
  width: 50vw;
`;

const StyledBlock = styled.div`
  display: flex;
  padding: 15px;

`;

const StyledAddIcon = styled(AddIcon)`
  padding-top: 10px;
  cursor: pointer;
`

export function AdminProjects(){
  const { error, projects, onAdd, onDelete, onUpdate } = useAdminProjects();
  const throwError = useAsyncError();
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [popUp, setPopUp] = useState(false);
  
  const handleFileLoad = (e) => {
      setFile(e.target.files[0]);
  }
  const uploadImage = (event) => {
    
    
};


  const handleUpload = (e) => {

  }

  const openAddProject = (e) =>{
     setPopUp(!popUp);
  }

  return (
      <>
      <h2>Project List</h2>
      {error && <h1>{error}</h1>}
      {popUp && <AddProject />}
      <StyledBlock>
        <p>add project</p>
        <StyledAddIcon onClick={(e)=>openAddProject(e)}/>
      </StyledBlock>
      {projects?.map((project) => 
          <div key="projects.id">
            <StyledImg src={`/api/${project.images[0].image_link}`} alt="project"/>
          <Item>
           <p>{project.name}</p>
           <p>{project.date}</p>
           <p>{project.link}</p>
           <AddPhotoAlternateIcon onClick={(e)=>uploadImage(e)} />
           <DeleteIcon onClick={()=>{
               onDelete(project.id);
           }} />
             <EditIcon  />
             {project?.technologies.map((t, index) => <p key="t.id">{t.name}</p>)}
           </Item>
           </div> 
        )}    
   </>
  )
}
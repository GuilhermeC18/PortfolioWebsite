import React from 'react';
//Custom Hooks 
import useAdminProjects from '../../hooks/useAdminProjects';
import useAsyncError from '../../hooks/useAsyncError';

//React Hooks 
import { useEffect, useState } from 'react';

//Styled Components 
import { Item } from '../input';
import styled from 'styled-components';

//Material-UI
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

//Axios
import axios from 'axios';

//Toastify
import {toast} from 'react-toastify';

const StyledImg = styled.img`
  width: 50vw;
`;

export function AdminProjects(){
  const { error, projects, onAdd, onDelete, onUpdate } = useAdminProjects();
  const throwError = useAsyncError();
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  
  const handleFileLoad = (e) => {
      setFile(e.target.files[0]);
  }
  const uploadImage = (event) => {
    
    
};


  const handleUpload = (e) => {

  }


  
  


  console.log("project fetch", projects);
  return (
      <>
      <h2>Project List</h2>
      {error && <h1>{error}</h1>}
      <p>add project</p>
      <AddIcon />
      {projects && projects?.map((project) => 
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
           {project.technologies.map((t, index) => <p key="t.id">{t.name}</p>)}
           </Item>
           </div> 
        )}    
   </>
  )
}
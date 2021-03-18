
import { RequestHandler } from 'express';

const client = require("../config/prisma-config");

//PROJECT
export const createProject: RequestHandler = async (req, res, next) =>{
    try {
      const newName:String = req.body.name;
      const newDate:String = req.body.date;
      const newDescription:String = req.body.description; 
      const newLink:String = req.body.link;
      const createdProject = await client.project.create({
        //need to add other fields 
        data:
        { name: newName, date: newDate, description: newDescription, link: newLink }
    });
    res.status(200).json(createdProject);
  } catch (err) {
     next(err);
  }
}


export const updateProject: RequestHandler = async (req, res, next) => {
   //updates a project    
   try {
    const projectId = Number(req.params.id);
    const newName = req.body.name;
    const newDate = req.body.date;
    const newLink = req.body.link;
    const updatedProject = await client.project.update({
     where : {id: projectId},
     data: { name: newName, date: newDate, link: newLink },
     include: {
       technologies: true,
     },
    });
  res.status(200).json(updatedProject);
} catch (err) {
   next(err);
}
 
}


export const deleteProject: RequestHandler = async (req, res, next) =>{
    try {
        const projectId = Number(req.params.id);
        const deletedProject = await client.project.delete({
         where : {id: projectId},
         include: {
           technologies: true,
         },
        });
      res.status(200).json(deletedProject);
    } catch (err) {
       next(err);
    }
}
export const findProject: RequestHandler = async (req, res, next) =>{
    try {
      const projectId = Number(req.params.id);
        
      const foundProject = await client.project.findUnique({
       where : {id: projectId},
       include: {
         technologies: true,
       },
      });
    res.status(200).json(foundProject);
  } catch (err) {
     next(err);
  }
}

//TECH
export const createTechnology: RequestHandler = async (req, res, next) =>{
  //
  try {
    const newName = req.body.name;
    const createdTech = await client.technology.create({
      //need to add other fields 
      data:
      { name: newName}
  });
  res.status(200).json(createdTech);
} catch (err) {
   next(err);
 }
}


export const getAllTechnologies: RequestHandler = async (req, res, next) =>{
  //
  try {  
    const technologies = await client.technology.findMany();
    res.status(200).json(technologies);
  } catch (err) {
    next(err);
  }
}




export const updateTechnology: RequestHandler = async (req, res, next) =>{
  //
  try {
    const techId = Number(req.params.id);
    const newName = req.body.name;
    const updatedTech = await client.technology.update({
     where : {id: techId},
     data: { name: newName }
    });
  res.status(200).json(updatedTech);
  } catch (err) {
   next(err);
  }
}


export const deleteTechnology: RequestHandler = async (req, res, next) =>{
  //
  try {
    const techId = Number(req.params.id);
    const deletedTech = await client.technology.delete({
     where : {id: techId}
    });
  res.status(200).json(deletedTech);
 } catch (err) {
   next(err);
}
}


export const updateProjectTechnologies: RequestHandler = async (req, res, next) =>{
  //
  try {
  const projectId: Number = Number(req.params.id);
  const technologiesId: Number = Number(req.body.techId);
  const projectTech = await client.project.update({
    where: {id: projectId },
    data: {
      technologies: {
        connect: [{ id: technologiesId}],
      },
    },
    include: {
      technologies: true,
    },
  });
  res.status(200).json(projectTech);
  } catch(err){
    next(err);
  }
}



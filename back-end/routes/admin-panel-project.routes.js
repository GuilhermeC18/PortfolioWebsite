const { createProject, updateProject, deleteProject, findProject, createTechnology, getAllTechnologies, updateProjectTechnologies} = require('../controller/admin-panel.controller');
const { getAllProjects } = require('../controller/user-panel.controller');
const router = require('express').Router();




//Project 
router.get('/', getAllProjects); //Found on the user controller
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);
router.get('/:id', findProject);


//Connect a technology to a project 
router.post('/:id/technology', updateProjectTechnologies); 

module.exports = router;


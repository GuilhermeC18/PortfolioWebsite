const { getAllProjects, findProjectsByTech } = require('../controller/user-panel.controller');

const router = require('express').Router();


router.get('/', getAllProjects);

//Find all projects that use a technology
router.get('/technology/:technologyId', findProjectsByTech);

module.exports = router;
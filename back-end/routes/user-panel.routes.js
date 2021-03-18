const { getAllProjects, findProjectsByTech } = require('../controller/user-panel.controller');

const router = require('express').Router();

router.get('/', getAllProjects);
router.get('/technology/:technologyId', findProjectsByTech);

module.exports = router;
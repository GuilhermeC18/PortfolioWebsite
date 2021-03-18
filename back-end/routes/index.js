const router = require('express').Router();
const adminPanelProjectRouter = require('./admin-panel-project.routes');
const userPanelRouter = require('./user-panel.routes');
const adminPanelTechnologyRouter = require('./admin-panel-tech.routes');
const authRouter = require('./auth.routes');
const { checkAuth } = require('../middleware/auth.middleware');
const uploadRouter = require('./upload.routes.js');




//What the user has access to 
router.use('/api/user', userPanelRouter);

//Admin Authentication 
router.use('/api/auth/', authRouter);

//Upload Project Images 
router.use('/api/uploads', uploadRouter);

//Add, Modify, Delete, Find Projects 
router.use('/api/admin/project', checkAuth ,adminPanelProjectRouter);

//Add, Modify, Delete, Find Technologies 
router.use('/api/admin/tech', checkAuth, adminPanelTechnologyRouter);

module.exports = router;


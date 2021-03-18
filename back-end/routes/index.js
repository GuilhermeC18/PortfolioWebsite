const router = require('express').Router();
const adminPanelProjectRouter = require('./admin-panel-project.routes');
const userPanelRouter = require('./user-panel.routes');
const adminPanelTechnologyRouter = require('./admin-panel-tech.routes');
const authRouter = require('./auth.routes');
const { checkAuth } = require('../middleware/auth.middleware');
const uploadRouter = require('./upload.routes.js');



router.use('/api/uploads', uploadRouter);
router.use('/api/user', userPanelRouter);
router.use('/api/auth/', authRouter);
router.use('/api/admin/project', checkAuth ,adminPanelProjectRouter);
router.use('/api/admin/tech', checkAuth, adminPanelTechnologyRouter);

module.exports = router;


const { createTechnology, getAllTechnologies, updateTechnology, deleteTechnology } = require('../controller/admin-panel.controller');
const router = require('express').Router();

//Technology 
router.post('/', createTechnology); 
router.get('/', getAllTechnologies);
router.put('/:id', updateTechnology);
router.delete('/:id', deleteTechnology);



module.exports = router;
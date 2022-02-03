const express = require('express');
const router = express.Router(); // identifca as rotas que chegam 

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

router.post('/' , TaskValidation, TaskController.create); //primeiro execulta o middlewares e depois o createe
router.put('/:id' , TaskValidation, TaskController.update);
router.get('/filter/all', MacaddressValidation, TaskController.all);

module.exports = router;
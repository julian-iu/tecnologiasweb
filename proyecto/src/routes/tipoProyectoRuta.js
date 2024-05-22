const express = require('express');
const router = express.Router();
const tipoProyectoControlador = require('../controllers/tipoProyectoControlador');

router.get('/', tipoProyectoControlador.getallTypeProjects);
router.get('/:id', tipoProyectoControlador.getTipoProyectoById);
router.post('/', tipoProyectoControlador.addProyecto);
router.put('/:id', tipoProyectoControlador.updateTipoProyecto);

module.exports = router;
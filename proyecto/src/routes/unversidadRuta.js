const express = require('express');
const router = express.Router();
const universidadControlador = require('../controllers/universidadControlador');

router.get('/', universidadControlador.getallUniversity);
router.get('/:id', universidadControlador.getUniversidadById);
router.post('/', universidadControlador.addUniversidad);
router.put('/:id', universidadControlador.updateUniversidad);

module.exports = router;
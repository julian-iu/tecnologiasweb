const express = require('express');
const router = express.Router();
const etapaControlador = require('../controllers/etapaControlador');

router.get('/', etapaControlador.getallStages);
router.get('/:id', etapaControlador.getEtapaById);
router.post('/', etapaControlador.addEtapa);
router.put('/:id', etapaControlador.updateEtapa);

module.exports = router;
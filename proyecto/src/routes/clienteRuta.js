const express = require('express');
const router = express.Router();
const clienteControlador = require('../controllers/clienteControlador');

router.get('/', clienteControlador.getallClients);
router.get('/:id', clienteControlador.getClienteById);
router.post('/', clienteControlador.addCliente);
router.put('/:id', clienteControlador.updateCliente);

module.exports = router;
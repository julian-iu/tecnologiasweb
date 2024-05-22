const cliente = require('../models/clienteModelo');
//ver all clients
exports.getallClients = async (req, res) => {
    try {
        const clientes = await cliente.find();
        res.json(clientes);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

//buscar por id
exports.getClienteById = async (req, res) => {
    try {
        const id = req.params.id;
        const Cliente = await cliente.findById(id);
        if (!Cliente) {
            return res.status(404).json({ message: 'Cliente no encotrado o inexistente' });
        }
        res.json(Cliente);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//agregar
exports.addCliente = async (req, res) => {
    try {
        const Clientes = new Clientes(req.body);
        await clientes.save();
        res.status(201).json(Clientes)
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
};

//actualizar por su id
exports.updateCliente = async (req, res) => {
    try {
        const idByCliente = req.params.id;
        const updatedData = req.body;
        const  updatedCliente = await cliente.findByIdAndUpdate(
            {_id: idByCliente},
            {$set: updatedData},
            {new: true}
        );
        if (!updatedCliente) {
            return res.status(404).json({ message: 'Cliente no encontrado o inexistente' });
        }
        res.json(updatedCliente);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
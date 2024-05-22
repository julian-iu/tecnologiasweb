const tipoProyecto = require('../models/tipoProyectoModelo');

//ver all Typeprojects
exports.getallTypeProjects = async (req, res) => {
    try {
        const typeProyecto = await tipoProyecto.find();
        res.json(typeProyecto);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

//buscar por id
exports.getTipoProyectoById = async (req, res) => {
    try {
        const id = req.params.id;
        const typeProyecto = await tipoProyecto.findById(id);
        if (!typeProyecto) {
            return res.status(404).json({ message: 'Tipo de Proyecto no encotrado o inexistente' });
        }
        res.json(typeProyecto);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//agregar
exports.addProyecto = async (req, res) => {
    try {
        const typeProyecto = new typeProyecto(req.body);
        await tipoProyecto.save();
        res.status(201).json(typeProyecto)
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
};

//actualizar por su id
exports.updateTipoProyecto = async (req, res) => {
    try {
        const idBytipoProyecto = req.params.id;
        const updatedData = req.body;
        const  updatedTipoProyecto = await tipoProyecto.findByIdAndUpdate(
            {_id: idBytipoProyecto},
            {$set: updatedData},
            {new: true}
        );
        if (!updatedTipoProyecto) {
            return res.status(404).json({ message: 'Tipo de Proyecto no encontrado o inexistente' });
        }
        res.json(updatedTipoProyecto);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
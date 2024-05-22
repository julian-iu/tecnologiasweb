const universidad = require('../models/universidadModelo');

//ver all University
exports.getallUniversity = async (req, res) => {
    try {
        const universidades = await universidad.find();
        res.json(universidades);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

//buscar por id
exports.getUniversidadById = async (req, res) => {
    try {
        const id = req.params.id;
        const Universidad = await universidad.findById(id);
        if (!Universidad) {
            return res.status(404).json({ message: 'Universidad no encotrada o inexistente' });
        }
        res.json(Universidad);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//agregar
exports.addUniversidad = async (req, res) => {
    try {
        const Universidad = new Universidad(req.body);
        await universidad.save();
        res.status(201).json(Universidad)
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
};

//actualizar por su id
exports.updateUniversidad = async (req, res) => {
    try {
        const idByUniversidad = req.params.id;
        const updatedData = req.body;
        const  updatedUniversidad = await universidad.findByIdAndUpdate(
            {_id: idByUniversidad},
            {$set: updatedData},
            {new: true}
        );
        if (!updatedUniversidad) {
            return res.status(404).json({ message: 'Universidad no encontrada o inexistente' });
        }
        res.json(updatedUniversidad);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
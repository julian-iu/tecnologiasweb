const etapa = require('../models/etapaModelo');

//ver all Stages
exports.getallStages = async (req, res) => {
    try {
        const etapas = await etapa.find();
        res.json(etapas);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

//buscar etapa por id
exports.getEtapaById = async (req, res) => {
    try {
        const id = req.params.id;
        const etapa = await Etapa.findById(id);
        if (!etapa) {
            return res.status(404).json({ message: 'Etapa no encotrada o inexistente' });
        }
        res.json(etapa);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


//agregar
exports.addEtapa = async (req, res) => {
    try {
        const etapa = new Etapa(req.body);
        await etapa.save();
        res.status(201).json(etapa)
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
};

//actualizar por su id
exports.updateEtapa = async (req, res) => {
    try {
        const idByEtapa = req.params.id;
        const updatedData = req.body;
        const  updatedEtapa = await Etapa.findByIdAndUpdate(
            {_id: idByEtapa},
            {$set: updatedData},
            {new: true}
        );
        if (!updatedEtapa) {
            return res.status(404).json({ message: 'Etapa no encontrada o inexistente' });
        }
        res.json(updatedEtapa);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const { Participation } = require('../models');

exports.createParticipation = async (req, res) => {
    try {
        const participation = await Participation.create(req.body);
        res.status(201).json(participation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getParticipation = async (req, res) => {
    try {
        const participation = await Participation.findByPk(req.params.id);
        if (participation) {
            res.status(200).json(participation);
        } else {
            res.status(404).json({ error: 'Participation non trouvée' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateParticipation = async (req, res) => {
    try {
        const participation = await Participation.findByPk(req.params.id);
        if (participation) {
            await participation.update(req.body);
            res.status(200).json(participation);
        } else {
            res.status(404).json({ error: 'Participation non trouvée' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteParticipation = async (req, res) => {
    try {
        const participation = await Participation.findByPk(req.params.id);
        if (participation) {
            await participation.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Participation non trouvée' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
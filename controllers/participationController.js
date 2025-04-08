const { Participation, Event} = require('../models');

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

exports.getAllParticipations = async (req,res) => {
    try {
        const participations = await Participation.findAll();
        res.status(200).json(participations);
    } catch (error) {
        res.status(400).json({message : error.message});
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

exports.deleteAll = async (req, res) => {
    try {
        await Participation.destroy({
            where: {},
            truncate: true,
        });
        res.status(200).json({ message: 'Toutes les participations ont été supprimées.' });
    } catch (error) {
        console.error('Erreur lors de la suppression des participations :', error);
        res.status(500).json({ error: 'Erreur serveur lors de la suppression.' });
    }
};

exports.getAllParticipationsWithEventInfo = async (req, res) => {
    try {
        const participations = await Participation.findAll({
            include: [
                {
                    model: Event,
                    attributes: ['id', 'name', 'location', 'style_of_music', 'description', 'restauration', 'image', 'type', 'date']
                }
            ]
        });
        res.status(200).json(participations);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

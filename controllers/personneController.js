const { Personne } = require('../models');

exports.createPersonne = async (req, res) => {
    try {
        const personne = await Personne.create(req.body);
        res.status(201).json(personne);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPersonne = async (req, res) => {
    try {
        const personne = await Personne.findByPk(req.params.id);
        if (personne) {
            res.status(200).json(personne);
        } else {
            res.status(404).json({ error: 'Personne non trouvée' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updatePersonne = async (req, res) => {
    try {
        const personne = await Personne.findByPk(req.params.id);
        if (personne) {
            await personne.update(req.body);
            res.status(200).json(personne);
        } else {
            res.status(404).json({ error: 'Personne non trouvée' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deletePersonne = async (req, res) => {
    try {
        const personne = await Personne.findByPk(req.params.id);
        if (personne) {
            await personne.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Personne non trouvée' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
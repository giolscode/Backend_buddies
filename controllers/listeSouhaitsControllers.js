const { ListeSouhaits } = require('../models');

exports.createList = async (req, res) => {
    try {
        const liste = await ListeSouhaits.create(req.body);
        res.status(201).json(liste);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getList = async (req, res) => {
    try {
        const liste = await ListeSouhaits.findByPk(req.params.id);
        if (liste) {
            res.status(200).json(liste);
        } else {
            res.status(404).json({ error: 'Liste de souhaits non trouvée' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateList = async (req, res) => {
    try {
        const liste = await ListeSouhaits.findByPk(req.params.id);
        if (liste) {
            await liste.update(req.body);
            res.status(200).json(liste);
        } else {
            res.status(404).json({ error: 'Liste de souhaits non trouvée' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteListe = async (req, res) => {
    try {
        const liste = await ListeSouhaits.findByPk(req.params.id);
        if (liste) {
            await liste.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Liste de souhaits non trouvée' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
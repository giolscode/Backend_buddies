const express = require('express');
const router = express.Router();
const participationController = require('../controllers/participationController');

// Route pour créer une participation
router.post('/', participationController.createParticipation);

// Route pour récupérer toutes les participations
router.get('/', participationController.getAllParticipations);

// Route pour récupérer une participation par ID
router.get('/:id', participationController.getParticipation);

// Route pour mettre à jour une participation
router.patch('/:id', participationController.updateParticipation);

// Route pour supprimer une participation
router.delete('/:id', participationController.deleteParticipation);

module.exports = router;
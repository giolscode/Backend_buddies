const express = require('express');
const router = express.Router();
const personneController = require('../controllers/personneController');

// Route pour créer une personne
router.post('/', personneController.createPersonne);

// Route pour récupérer une personne par ID
router.get('/:id', personneController.getPersonne);

// Route pour mettre à jour une personne
router.patch('/:id', personneController.updatePersonne);

// Route pour supprimer une personne
router.delete('/:id', personneController.deletePersonne);

module.exports = router;
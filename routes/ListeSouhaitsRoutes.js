const express = require('express');
const router = express.Router();
const listeSouhaitsController = require('../controllers/listeSouhaitsControllers');

// Route pour créer une liste de souhaits
router.post('/', listeSouhaitsController.createList);

// Route pour récupérer une liste de souhaits par ID
router.get('/:id', listeSouhaitsController.getList);

// Route pour mettre à jour une liste de souhaits
router.patch('/:id', listeSouhaitsController.updateList);

// Route pour supprimer une liste de souhaits
router.delete('/:id', listeSouhaitsController.deleteListe);

module.exports = router;
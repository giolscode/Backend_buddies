const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messagesControllers')

// Route pour créer un évènement
router.post('/',messageController.createMessage);

// Route pour récuperer tout les évènements
router.get('/',messageController.findAllMessage);

// Route pour récuperer un évènement par ID
router.get('/:id',messageController.findOneMessage);

// Route pour modifier les informations d'un évènement
router.patch('/:id',messageController.updateMessage);

// Route pour supprimer un évènement
router.delete('/:id',messageController.deleteMessage);

module.exports = router ; 
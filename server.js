const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const initDatabase = require('./initDatabase'); 

const personneRoutes = require('./routes/personneRoutes');
const eventRoutes = require('./routes/eventRoutes');
const listeSouhaitsRoutes = require('./routes/ListeSouhaitsRoutes');
const messageRoutes = require('./routes/messagesRoutes');
const participationRoutes = require('./routes/participationRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Utiliser les routes
app.use('/api/personnes', personneRoutes);
app.use('/api/listes', listeSouhaitsRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/participations', participationRoutes);

// Initialisation de la base de données
initDatabase().then(() => {
  
  app.listen(PORT, () => {
    console.log(`🚀 Serveur en cours d'exécution sur le port ${PORT}`);
  });
});
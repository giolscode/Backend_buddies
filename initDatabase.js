const { sequelize } = require('./models');

const initDatabase = async () => {
  try {
    console.log('🔄 Initialisation de la base de données...');
    await sequelize.sync({ force: false });
    console.log('✅ Base de données initialisée avec succès.');
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation de la base de données :', error);
    process.exit(1); 
  }
};

module.exports = initDatabase;
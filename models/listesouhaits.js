module.exports = (sequelize, DataTypes) => {
  const ListeSouhaits = sequelize.define('ListeSouhaits', {
    personne_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER
  });

  ListeSouhaits.associate = models => {
    ListeSouhaits.belongsTo(models.Personne, { foreignKey: 'personne_id', onDelete: 'CASCADE' });
    ListeSouhaits.belongsTo(models.Event, { foreignKey: 'event_id', onDelete: 'CASCADE' });
  };

  return ListeSouhaits;
};

module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    personne_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    date_envoi: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  });

  Message.associate = models => {
    Message.belongsTo(models.Personne, { foreignKey: 'personne_id', onDelete: 'CASCADE' });
    Message.belongsTo(models.Event, { foreignKey: 'event_id', onDelete: 'CASCADE' });
  };

  return Message;
};
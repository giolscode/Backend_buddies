module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    style_of_music: DataTypes.STRING,
    description: DataTypes.TEXT,
    restauration: DataTypes.BOOLEAN,
    image: DataTypes.TEXT,
    type: DataTypes.STRING
  });

  Event.associate = models => {
    Event.hasMany(models.Participation, { foreignKey: 'event_id' });
    Event.hasMany(models.ListeSouhaits, { foreignKey: 'event_id' });
    Event.hasMany(models.Message, { foreignKey: 'event_id' });
  };

  return Event;
};
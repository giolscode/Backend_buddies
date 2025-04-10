module.exports = (sequelize, DataTypes) => {
  const Personne = sequelize.define('Personne', {
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    personne_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    tableName: 'Personnes',
    timestamps: true,
  });

  Personne.associate = models => {
    Personne.hasMany(models.Participation, {
      foreignKey: 'personne_id',
      as: 'participations',
    });
    Personne.hasMany(models.ListeSouhaits, {
      foreignKey: 'personne_id',
      as: 'listeSouhaits',
    });
    Personne.hasMany(models.Message, {
      foreignKey: 'personne_id',
      as: 'messages',
    });
  };

  return Personne;
};
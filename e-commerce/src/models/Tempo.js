module.exports = (sequelize, DataTypes) => {
  const TempoTable = sequelize.define('DIM_Tempo', {
    ID_tempo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Ano: {
      type: DataTypes.INTEGER
    },
    Mês: {
      type: DataTypes.INTEGER
    },
    Dia: {
      type: DataTypes.INTEGER
    },
    Data: {
      type: DataTypes.INTEGER
    }
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'DIM_Tempo'
    }
  );

  TempoTable.associate = (models) => {
    TempoTable.hasMany(models.VendasTable,
    { foreignKey: 'ID_tempo', as: 'tempo' });
  };

  return TempoTable;
};

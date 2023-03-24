module.exports = (sequelize, DataTypes) => {
  const LojaTable = sequelize.define('DIM_Loja', {
    ID_loja: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Cod_loja: {
      type: DataTypes.INTEGER
    },
    Nm_loja: {
      type: DataTypes.STRING
    }
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'DIM_Loja'
    }
  );

  LojaTable.associate = (models) => {
    LojaTable.hasMany(models.VendasTable,
    { foreignKey: 'ID_loja', as: 'loja' });
  };

  return LojaTable;
};

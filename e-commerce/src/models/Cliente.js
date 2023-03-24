module.exports = (sequelize, DataTypes) => {
  const ClienteTable = sequelize.define('DIM_Cliente', {
    ID_cliente: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Estado_civil: {
      type: DataTypes.STRING
    },
    Sexo: {
      type: DataTypes.STRING
    },
    Bairro: {
      type: DataTypes.STRING
    }
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'DIM_Cliente'
    }
  );

  ClienteTable.associate = (models) => {
    ClienteTable.hasMany(models.VendasTable,
    { foreignKey: 'ID_cliente', as: 'cliente' });
  };

  return ClienteTable;
};

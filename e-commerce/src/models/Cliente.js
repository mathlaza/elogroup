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

  return ClienteTable;
};

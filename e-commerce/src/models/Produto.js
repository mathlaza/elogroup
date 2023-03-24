module.exports = (sequelize, DataTypes) => {
  const ProdutoTable = sequelize.define('DIM_Produto', {
    ID_produto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Cod_produto: {
      type: DataTypes.INTEGER
    },
    Nm_produto: {
      type: DataTypes.STRING
    },
    Seção: {
      type: DataTypes.STRING
    },
    Grupo: {
      type: DataTypes.STRING
    },
    Subgrupo: {
      type: DataTypes.STRING
    }
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'DIM_Produto'
    }
  );

  ProdutoTable.associate = (models) => {
    ProdutoTable.hasMany(models.VendasTable,
    { foreignKey: 'ID_produto', as: 'produto' });
  };

  return ProdutoTable;
};

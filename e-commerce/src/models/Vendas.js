module.exports = (sequelize, DataTypes) => {
  const VendasTable = sequelize.define('FT_Vendas', {
    ID_loja: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: 'LojaTable', key: 'ID_loja' }
    },
    ID_produto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: 'ProdutoTable', key: 'ID_produto' }
    },
    ID_cliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: 'ClienteTable', key: 'ID_cliente' }
    },
    ID_tempo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: 'TempoTable', key: 'ID_tempo' }
    },
    Qtde_vendida: {
      type: DataTypes.INTEGER
    },
    Receita_venda: {
      type: DataTypes.DECIMAL
    }
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'FT_Vendas'
    }
  );

  VendasTable.associate = (models) => {
    models.VendasTable.belongsTo(models.LojaTable,{
      as: 'loja',
      foreignKey: 'ID_loja',
    });

    models.VendasTable.belongsTo(models.ProdutoTable,{
      as: 'produto',
      foreignKey: 'ID_produto',
    });

    models.VendasTable.belongsTo(models.ClienteTable,{
      as: 'cliente',
      foreignKey: 'ID_cliente',
    });

    models.VendasTable.belongsTo(models.TempoTable,{
      as: 'tempo',
      foreignKey: 'ID_tempo',
    });
  };

  return VendasTable;
};

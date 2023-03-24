'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FT_Vendas', {
      ID_loja: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'ID_loja',
        references: {
          model: 'DIM_Loja',
          key: 'ID_loja',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ID_produto: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'ID_produto',
        references: {
          model: 'DIM_Produto',
          key: 'ID_produto',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ID_cliente: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'ID_cliente',
        references: {
          model: 'DIM_Cliente',
          key: 'ID_cliente',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ID_tempo: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'ID_tempo',
        references: {
          model: 'DIM_Tempo',
          key: 'ID_tempo',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      Qtde_vendida: {
        type: Sequelize.INTEGER
      },
      Receita_venda: {
        type: Sequelize.DECIMAL(9,2)
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('FT_Vendas');
  }
};

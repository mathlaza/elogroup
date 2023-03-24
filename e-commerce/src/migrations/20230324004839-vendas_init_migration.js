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
        }
      },
      ID_produto: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'ID_produto',
        references: {
          model: 'DIM_Produto',
          key: 'ID_produto',
        }
      },
      ID_cliente: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'ID_cliente',
        references: {
          model: 'DIM_Cliente',
          key: 'ID_cliente',
        }
      },
      ID_tempo: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'ID_tempo',
        references: {
          model: 'DIM_Tempo',
          key: 'ID_tempo',
        }
      },
      Qtde_vendida: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Receita_venda: {
        allowNull: false,
        type: Sequelize.DECIMAL(38,2)
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('FT_Vendas');
  }
};

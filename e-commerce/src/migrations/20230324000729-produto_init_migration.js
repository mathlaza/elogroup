'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DIM_Produto', {
      ID_produto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Cod_produto: {
        type: Sequelize.INTEGER
      },
      Nm_produto: {
        type: Sequelize.STRING(255)
      },
      Seção: {
        type: Sequelize.STRING(255)
      },
      Grupo: {
        type: Sequelize.STRING(255)
      },
      Subgrupo: {
        type: Sequelize.STRING(255)
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('DIM_Produto');
  }
};

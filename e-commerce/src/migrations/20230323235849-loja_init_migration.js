'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DIM_Loja', {
      ID_loja: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Cod_loja: {
        type: Sequelize.INTEGER
      },
      Nm_loja: {
        type: Sequelize.STRING(255)
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('DIM_Loja');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DIM_Cliente', {
      ID_cliente: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Estado_civil: {
        type: Sequelize.STRING(255)
      },
      Sexo: {
        type: Sequelize.STRING(255)
      },
      Bairro: {
        type: Sequelize.STRING(255)
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('DIM_Cliente');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DIM_Tempo', {
      ID_tempo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Ano: {
        type: Sequelize.INTEGER
      },
      Mês: {
        type: Sequelize.INTEGER
      },
      Dia: {
        type: Sequelize.INTEGER
      },
      Data: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('DIM_Tempo');
  }
};

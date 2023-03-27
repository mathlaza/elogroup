module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('DIM_Loja',
      [{
        ID_loja: 1,
        Cod_loja: 21,
        Nm_loja: 'Flor de Liz'
      },
      {
        ID_loja: 2,
        Cod_loja: 33,
        Nm_loja: 'Magazine Luiza'
      },
      {
        ID_loja: 3,
        Cod_loja: 78,
        Nm_loja: 'Flor da pele'
      },
      {
        ID_loja: 4,
        Cod_loja: 5,
        Nm_loja: 'Wallmart'
      },
      {
        ID_loja: 5,
        Cod_loja: 32,
        Nm_loja: 'Ana July'
      },
      {
        ID_loja: 6,
        Cod_loja: 456,
        Nm_loja: 'Animale'
      },
      {
        ID_loja: 7,
        Cod_loja: 234,
        Nm_loja: 'Victor Hugo'
      },
      {
        ID_loja: 8,
        Cod_loja: 367,
        Nm_loja: 'Reserva'
      },
      {
        ID_loja: 9,
        Cod_loja: 32,
        Nm_loja: 'Hortênsias Moda'
      },
      {
        ID_loja: 10,
        Cod_loja: 1,
        Nm_loja: 'Elegance Modas'
      },
      {
        ID_loja: 11,
        Cod_loja: 112,
        Nm_loja: 'Universo Feminino'
      },
      {
        ID_loja: 12,
        Cod_loja: 123,
        Nm_loja: 'Joinha'
      },
      {
        ID_loja: 13,
        Cod_loja: 342,
        Nm_loja: 'Belo Traje'
      },
      {
        ID_loja: 14,
        Cod_loja: 32,
        Nm_loja: 'SNAP'
      },
      {
        ID_loja: 15,
        Cod_loja: 145,
        Nm_loja: 'Urban Boy'
      },
      {
        ID_loja: 16,
        Cod_loja: 13,
        Nm_loja: 'Bela Prata'
      },
      {
        ID_loja: 17,
        Cod_loja: 27,
        Nm_loja: 'Makeup Shop'
      },
      {
        ID_loja: 18,
        Cod_loja: 32,
        Nm_loja: 'Doce Encanto'
      },
      {
        ID_loja: 19,
        Cod_loja: 8,
        Nm_loja: 'Moço Conectado'
      },
      {
        ID_loja: 20,
        Cod_loja: 321,
        Nm_loja: 'Vector Importados'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('DIM_Loja', null, {});
  },
};

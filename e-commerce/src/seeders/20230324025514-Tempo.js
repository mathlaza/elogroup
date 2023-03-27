module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('DIM_Tempo',
      [{
        ID_tempo: 1,
        Ano: 2018,
        Mês: 3,
        Dia: 1,
        Data: new Date('2018-03-01')
      },
      {
        ID_tempo: 2,
        Ano: 2020,
        Mês: 4,
        Dia: 1,
        Data: new Date('2020-04-01')
      },
      {
        ID_tempo: 3,
        Ano: 2022,
        Mês: 1,
        Dia: 6,
        Data: new Date('2022-01-06')
      },
      {
        ID_tempo: 4,
        Ano: 1987,
        Mês: 1,
        Dia: 7,
        Data: new Date('1987-01-07')
      },
      {
        ID_tempo: 5,
        Ano: 2022,
        Mês: 1,
        Dia: 8,
        Data: new Date('2022-01-08')
      },
      {
        ID_tempo: 6,
        Ano: 2020,
        Mês: 4,
        Dia: 1,
        Data: new Date('2020-04-01')
      },
      {
        ID_tempo: 7,
        Ano: 2020,
        Mês: 4,
        Dia: 1,
        Data: new Date('2020-04-01')
      },
      {
        ID_tempo: 8,
        Ano: 2020,
        Mês: 4,
        Dia: 1,
        Data: new Date('2020-04-01')
      },
      {
        ID_tempo: 9,
        Ano: 2021,
        Mês: 1,
        Dia: 12,
        Data: new Date('2021-01-12')
      },
      {
        ID_tempo: 10,
        Ano: 2022,
        Mês: 1,
        Dia: 13,
        Data: new Date('2022-01-13')
      },
      {
        ID_tempo: 11,
        Ano: 1999,
        Mês: 1,
        Dia: 14,
        Data: new Date('1999-01-14')
      },
      {
        ID_tempo: 12,
        Ano: 2022,
        Mês: 1,
        Dia: 15,
        Data: new Date('2022-01-15')
      },
      {
        ID_tempo: 13,
        Ano: 1990,
        Mês: 1,
        Dia: 16,
        Data: new Date('1990-01-16')
      },
      {
        ID_tempo: 14,
        Ano: 2020,
        Mês: 4,
        Dia: 1,
        Data: new Date('2020-04-01')
      },
      {
        ID_tempo: 15,
        Ano: 2020,
        Mês: 4,
        Dia: 1,
        Data: new Date('2020-04-01')
      },
      {
        ID_tempo: 16,
        Ano: 2022,
        Mês: 1,
        Dia: 19,
        Data: new Date('2022-01-19')
      },
      {
        ID_tempo: 17,
        Ano: 2023,
        Mês: 1,
        Dia: 20,
        Data: new Date('2023-01-20')
      },
      {
        ID_tempo: 18,
        Ano: 2022,
        Mês: 4,
        Dia: 1,
        Data: new Date('2022-04-01')
      },
      {
        ID_tempo: 19,
        Ano: 2020,
        Mês: 4,
        Dia: 1,
        Data: new Date('2020-04-01')
      },
      {
        ID_tempo: 20,
        Ano: 2022,
        Mês: 4,
        Dia: 1,
        Data: new Date('2022-04-01')
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('DIM_Tempo', null, {});
  },
};

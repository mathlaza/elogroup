module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('DIM_Cliente',
      [{
        ID_cliente: 1,
        Estado_civil: 'Solteiro',
        Sexo: 'Masculino',
        Bairro: 'Centro'
      },
      {
        ID_cliente: 2,
        Estado_civil: 'Divorciado',
        Sexo: 'Masculino',
        Bairro: 'Barra da Tijuca'
      },
      {
        ID_cliente: 3,
        Estado_civil: 'Casado',
        Sexo: 'Outros',
        Bairro: 'Flamengo'
      },
      {
        ID_cliente: 4,
        Estado_civil: 'Viuvo',
        Sexo: 'Feminino',
        Bairro: 'Leblon'
      },
      {
        ID_cliente: 5,
        Estado_civil: 'Casado',
        Sexo: 'Outros',
        Bairro: 'Tijuca'
      },
      {
        ID_cliente: 6,
        Estado_civil: 'Viuvo',
        Sexo: 'Masculino',
        Bairro: 'Centro'
      },
      {
        ID_cliente: 7,
        Estado_civil: 'Separado',
        Sexo: 'Feminino',
        Bairro: 'Jacarepaguá'
      },
      {
        ID_cliente: 8,
        Estado_civil: 'Separado',
        Sexo: 'Masculino',
        Bairro: 'Rocinha'
      },
      {
        ID_cliente: 9,
        Estado_civil: 'Solteiro',
        Sexo: 'Masculino',
        Bairro: 'Botafogo'
      },
      {
        ID_cliente: 10,
        Estado_civil: 'Solteiro',
        Sexo: 'Feminino',
        Bairro: 'Rocinha'
      },
      {
        ID_cliente: 11,
        Estado_civil: 'Viuvo',
        Sexo: 'Outros',
        Bairro: 'Centro'
      },
      {
        ID_cliente: 12,
        Estado_civil: 'Divorciado',
        Sexo: 'Feminino',
        Bairro: 'Leblon'
      },
      {
        ID_cliente: 13,
        Estado_civil: 'Divorciado',
        Sexo: 'Masculino',
        Bairro: 'Botafogo'
      },
      {
        ID_cliente: 14,
        Estado_civil: 'Separado',
        Sexo: 'Feminino',
        Bairro: 'Leblon'
      },
      {
        ID_cliente: 15,
        Estado_civil: 'Casado',
        Sexo: 'Masculino',
        Bairro: 'Centro'
      },
      {
        ID_cliente: 16,
        Estado_civil: 'Casado',
        Sexo: 'Outros',
        Bairro: 'Rocinha'
      },
      {
        ID_cliente: 17,
        Estado_civil: 'Solteiro',
        Sexo: 'Feminino',
        Bairro: 'Botafogo'
      },
      {
        ID_cliente: 18,
        Estado_civil: 'Divorciado',
        Sexo: 'Masculino',
        Bairro: 'Jacarepaguá'
      },
      {
        ID_cliente: 19,
        Estado_civil: 'Viuvo',
        Sexo: 'Outros',
        Bairro: 'Jacarepaguá'
      },
      {
        ID_cliente: 20,
        Estado_civil: 'Separado',
        Sexo: 'Feminino',
        Bairro: 'Centro'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('DIM_Cliente', null, {});
  },
};

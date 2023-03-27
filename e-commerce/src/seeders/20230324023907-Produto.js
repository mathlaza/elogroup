module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('DIM_Produto',
      [{
        ID_produto: 1,
        Cod_produto: 120,
        Nm_produto: 'Monitor',
        Seção: 'Eletronico',
        Grupo: 'Tecnologia',
        Subgrupo: 'Informatica'
      },
      {
        ID_produto: 2,
        Cod_produto: 13,
        Nm_produto: 'Calça',
        Seção: 'Vestimenta',
        Grupo: 'Calças',
        Subgrupo: 'Jeans'
      },
      {
        ID_produto: 3,
        Cod_produto: 27,
        Nm_produto: 'Sapato',
        Seção: 'Vestimenta',
        Grupo: 'Calçados',
        Subgrupo: 'Sport'
      },
      {
        ID_produto: 4,
        Cod_produto: 98,
        Nm_produto: 'Modem',
        Seção: 'Eletronico',
        Grupo: 'Tecnologia',
        Subgrupo: 'Informatica'
      },
      {
        ID_produto: 5,
        Cod_produto: 8,
        Nm_produto: 'Caneta',
        Seção: 'Papelaria',
        Grupo: 'Material Escolar',
        Subgrupo: ''
      },
      {
        ID_produto: 6,
        Cod_produto: 55,
        Nm_produto: 'Tenis',
        Seção: 'Vestimenta',
        Grupo: 'Calçados',
        Subgrupo: 'Corrida'
      },
      {
        ID_produto: 7,
        Cod_produto: 456,
        Nm_produto: 'Shampoo',
        Seção: 'Beleza',
        Grupo: 'Perfumaria',
        Subgrupo: 'Cabelo Lisos'
      },
      {
        ID_produto: 8,
        Cod_produto: 234,
        Nm_produto: 'Caderno',
        Seção: 'Papelaria',
        Grupo: 'Material Escolar',
        Subgrupo: ''
      },
      {
        ID_produto: 9,
        Cod_produto: 367,
        Nm_produto: 'Borracha',
        Seção: 'Papelaria',
        Grupo: 'Material Escolar',
        Subgrupo: ''
      },
      {
        ID_produto: 10,
        Cod_produto: 897,
        Nm_produto: 'Cueca',
        Seção: 'Vestimenta',
        Grupo: 'Cuecas',
        Subgrupo: 'Box'
      },
      {
        ID_produto: 11,
        Cod_produto: 1,
        Nm_produto: 'Mouse',
        Seção: 'Eletronico',
        Grupo: 'Tecnologia',
        Subgrupo: 'Informatica'
      },
      {
        ID_produto: 12,
        Cod_produto: 21,
        Nm_produto: 'Teclado',
        Seção: 'Eletronico',
        Grupo: 'Tecnologia',
        Subgrupo: 'Informatica'
      },
      {
        ID_produto: 13,
        Cod_produto: 33,
        Nm_produto: 'Condicionador',
        Seção: 'Beleza',
        Grupo: 'Perfumaria',
        Subgrupo: 'Cabelos Loiros'
      },
      {
        ID_produto: 14,
        Cod_produto: 142,
        Nm_produto: 'Meia',
        Seção: 'Vestimenta',
        Grupo: 'Meias',
        Subgrupo: 'Meia longa'
      },
      {
        ID_produto: 15,
        Cod_produto: 5,
        Nm_produto: 'Sapatilha',
        Seção: 'Vestimenta',
        Grupo: 'calçados',
        Subgrupo: 'Bale'
      },
      {
        ID_produto: 16,
        Cod_produto: 90,
        Nm_produto: 'Chinelo',
        Seção: 'Vestimenta',
        Grupo: 'calçados',
        Subgrupo: 'Havaianas'
      },
      {
        ID_produto: 17,
        Cod_produto: 120,
        Nm_produto: 'Notebook',
        Seção: 'Eletronico',
        Grupo: 'Tecnologia',
        Subgrupo: 'Informatica'
      },
      {
        ID_produto: 18,
        Cod_produto: 123,
        Nm_produto: 'Creme para pele',
        Seção: 'Beleza',
        Grupo: 'Perfumaria',
        Subgrupo: 'Diurno'
      },
      {
        ID_produto: 19,
        Cod_produto: 342,
        Nm_produto: 'Memoria DDR',
        Seção: 'Eletronico',
        Grupo: 'Tecnologia',
        Subgrupo: 'Informatica'
      },
      {
        ID_produto: 20,
        Cod_produto: 142,
        Nm_produto: 'Jaqueta',
        Seção: 'Vestimenta',
        Grupo: 'Roupas',
        Subgrupo: 'Couro'
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('DIM_Produto', null, {});
  },
};

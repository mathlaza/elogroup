module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('FT_Vendas',
      [{
        ID_loja: 1,
        ID_produto: 1,
        ID_cliente: 1,
        ID_tempo: 18,
        Qtde_vendida: 4803,
        Receita_venda: 610.92
      },
      {
        ID_loja: 2,
        ID_produto: 17,
        ID_cliente: 2,
        ID_tempo: 2,
        Qtde_vendida: 722,
        Receita_venda: 504.57
      },
      {
        ID_loja: 3,
        ID_produto: 3,
        ID_cliente: 3,
        ID_tempo: 13,
        Qtde_vendida: 1746,
        Receita_venda: 196.75
      },
      {
        ID_loja: 4,
        ID_produto: 4,
        ID_cliente: 12,
        ID_tempo: 4,
        Qtde_vendida: 981,
        Receita_venda: 250.28
      },
      {
        ID_loja: 5,
        ID_produto: 13,
        ID_cliente: 5,
        ID_tempo: 5,
        Qtde_vendida: 280,
        Receita_venda: 180.26
      },
      {
        ID_loja: 6,
        ID_produto: 6,
        ID_cliente: 14,
        ID_tempo: 18,
        Qtde_vendida: 3078,
        Receita_venda: 448.26
      },
      {
        ID_loja: 7,
        ID_produto: 7,
        ID_cliente: 7,
        ID_tempo: 7,
        Qtde_vendida: 349,
        Receita_venda: 955.57
      },
      {
        ID_loja: 8,
        ID_produto: 8,
        ID_cliente: 8,
        ID_tempo: 8,
        Qtde_vendida: 585,
        Receita_venda: 1493.95
      },
      {
        ID_loja: 9,
        ID_produto: 9,
        ID_cliente: 9,
        ID_tempo: 9,
        Qtde_vendida: 2024,
        Receita_venda: 1291.00
      },
      {
        ID_loja: 10,
        ID_produto: 18,
        ID_cliente: 10,
        ID_tempo: 15,
        Qtde_vendida: 1028,
        Receita_venda: 839.01
      },
      {
        ID_loja: 11,
        ID_produto: 11,
        ID_cliente: 11,
        ID_tempo: 11,
        Qtde_vendida: 3887,
        Receita_venda: 327.86
      },
      {
        ID_loja: 12,
        ID_produto: 12,
        ID_cliente: 4,
        ID_tempo: 12,
        Qtde_vendida: 2256,
        Receita_venda: 1092.36
      },
      {
        ID_loja: 13,
        ID_produto: 5,
        ID_cliente: 13,
        ID_tempo: 13,
        Qtde_vendida: 4797,
        Receita_venda: 907.54
      },
      {
        ID_loja: 14,
        ID_produto: 14,
        ID_cliente: 14,
        ID_tempo: 14,
        Qtde_vendida: 4271,
        Receita_venda: 527.52
      },
      {
        ID_loja: 15,
        ID_produto: 15,
        ID_cliente: 15,
        ID_tempo: 10,
        Qtde_vendida: 2713,
        Receita_venda: 664.75
      },
      {
        ID_loja: 16,
        ID_produto: 16,
        ID_cliente: 16,
        ID_tempo: 16,
        Qtde_vendida: 1356,
        Receita_venda: 823.50
      },
      {
        ID_loja: 17,
        ID_produto: 2,
        ID_cliente: 17,
        ID_tempo: 17,
        Qtde_vendida: 1300,
        Receita_venda: 928.96
      },
      {
        ID_loja: 18,
        ID_produto: 10,
        ID_cliente: 18,
        ID_tempo: 1,
        Qtde_vendida: 2627,
        Receita_venda: 547.45
      },
      {
        ID_loja: 19,
        ID_produto: 18,
        ID_cliente: 19,
        ID_tempo: 10,
        Qtde_vendida: 820,
        Receita_venda: 338.37
      },
      {
        ID_loja: 20,
        ID_produto: 20,
        ID_cliente: 18,
        ID_tempo: 20,
        Qtde_vendida: 234,
        Receita_venda: 961.01
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('FT_Vendas', null, {});
  },
};

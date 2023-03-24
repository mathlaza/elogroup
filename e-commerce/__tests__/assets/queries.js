module.exports = {
  insert: {
    DIM_Cliente: `
      INSERT INTO DIM_Cliente (
        Estado_civil, 
        Sexo, 
        Bairro
      ) VALUES (
        "Solteiro", 
        "Masculino", 
        "Centro"
      );
    `,
    DIM_Loja: `
      INSERT INTO DIM_Loja (
        Cod_loja,
        Nm_loja
      ) VALUES (
        21,
        "Flor de Liz"
      );
    `,
    DIM_Produto:  `
      INSERT INTO DIM_Produto (
        Cod_produto, 
        Nm_produto, 
        Seção, 
        Grupo, 
        Subgrupo
      ) VALUES (
        145, 
        "Monitor", 
        "Eletronico", 
        "Tecnologia", 
        "Informatica"
      );
    `,
    DIM_Tempo: `
      INSERT INTO DIM_Tempo (
        Ano,
        Mês,
        Dia,
        Data
      ) VALUES (
        2018,
        1,
        1,
        "2018-03-01"
      );
    `,
    FT_Vendas: `
      INSERT INTO FT_Vendas (
        ID_loja,
        ID_produto,
        ID_cliente,
        ID_tempo,
        Qtde_vendida,
        Receita_venda
      ) VALUES (
        1,
        1,
        1,
        1,
        2627,
        547.45
      );
    `
  },
  select: {
    DIM_Cliente: `
      SELECT * 
      FROM DIM_Cliente 
      WHERE ID_cliente = 1;
    `,
    DIM_Loja: `
      SELECT * 
      FROM DIM_Loja 
      WHERE ID_loja = 1;
    `,
    DIM_Produto: `
      SELECT * 
      FROM DIM_Produto 
      WHERE ID_produto = 1;
    `,
    DIM_Tempo: `
      SELECT * 
      FROM DIM_Tempo 
      WHERE ID_tempo = 1;
    `,
    FT_Vendas: `
    SELECT * 
    FROM FT_Vendas
    WHERE ID_tempo = 1;
  `
  },
  expect: {
    DIM_Cliente: {
      ID_cliente: 1,
      Estado_civil: 'Solteiro',
      Sexo: 'Masculino',
      Bairro: 'Centro'
    },
    DIM_Loja: {
      ID_loja: 1,
      Cod_loja: 21,
      Nm_loja: 'Flor de Liz'
    },
    DIM_Produto: {
      ID_produto: 1,
      Cod_produto: 145,
      Nm_produto: 'Monitor',
      Seção: 'Eletronico',
      Grupo: 'Tecnologia',
      Subgrupo: 'Informatica'
    },
    DIM_Tempo: {
      ID_tempo: 1,
      Ano: 2018,
      Mês: 1,
      Dia: 1,
      Data: new Date('2018-03-01')
    },
    FT_Vendas: {
      ID_loja: 1,
      ID_produto: 1,
      ID_cliente: 1,
      ID_tempo: 1,
      Qtde_vendida: 2627,
      Receita_venda: '547.45'
    }
  }
}

const Sequelize = require('sequelize');
const shell = require('shelljs');

const sequelizeConfig = require('../src/config/config');
const { sequelize: sequelizeCli } = require('./assets/constants');
const queries = require('./assets/queries');

describe('Testa migrations e seeders', () => {
  let database;

  beforeAll(() => {
    database = new Sequelize(sequelizeConfig.test);
  });

  beforeEach(() => {
    shell.exec([
      sequelizeCli.drop,
      sequelizeCli.create,
      sequelizeCli.migrate
    ].join(' && '),
      { silent: process.env.DEBUG === "false" });
  });

  it('Será validado que é possível fazer um INSERT e um SELECT na tabela DIM_Cliente', async () => {
    const insertQuery = await database
      .query(queries.insert.DIM_Cliente, { type: 'INSERT' });
    expect(insertQuery).toEqual([1, 1]);

    const [selectQuery] = await database
      .query(queries.select.DIM_Cliente, { type: 'SELECT' });
    expect(selectQuery).toEqual(
      expect.objectContaining(queries.expect.DIM_Cliente)
    );
  });

  it('Será validado que é possível fazer um INSERT e um SELECT na tabela DIM_Loja', async () => {
    const insertQuery = await database
      .query(queries.insert.DIM_Loja, { type: 'INSERT' });
    expect(insertQuery).toEqual([1, 1]);

    const [selectQuery] = await database
      .query(queries.select.DIM_Loja, { type: 'SELECT' });
    expect(selectQuery).toEqual(
      expect.objectContaining(queries.expect.DIM_Loja)
    );
  });

  it('Será validado que é possível fazer um INSERT e um SELECT na tabela DIM_Produto', async () => {
    const insertQuery = await database
      .query(queries.insert.DIM_Produto, { type: 'INSERT' });
    expect(insertQuery).toEqual([1, 1]);

    const [selectQuery] = await database
      .query(queries.select.DIM_Produto, { type: 'SELECT' });
    expect(selectQuery).toEqual(
      expect.objectContaining(queries.expect.DIM_Produto)
    );
  });

  it('Será validado que é possível fazer um INSERT e um SELECT na tabela DIM_Tempo', async () => {
    const insertQuery = await database
      .query(queries.insert.DIM_Tempo, { type: 'INSERT' });
    expect(insertQuery).toEqual([1, 1]);

    const [selectQuery] = await database
      .query(queries.select.DIM_Tempo, { type: 'SELECT' });
    expect(selectQuery).toEqual(
      expect.objectContaining(queries.expect.DIM_Tempo)
    );
  });

  it('Será validado que é possível fazer um INSERT e um SELECT na tabela FT_Vendas', async () => {
    await database.query(queries.insert.DIM_Cliente, { type: 'INSERT' });
    await database.query(queries.insert.DIM_Loja, { type: 'INSERT' });
    await database.query(queries.insert.DIM_Produto, { type: 'INSERT' });
    await database.query(queries.insert.DIM_Tempo, { type: 'INSERT' });

    const insertQuery = await database
      .query(queries.insert.FT_Vendas, { type: 'INSERT' });
    expect(insertQuery).toEqual([0, 1]);

    const [selectQuery] = await database
      .query(queries.select.FT_Vendas, { type: 'SELECT' });
    expect(selectQuery).toEqual(
      expect.objectContaining(queries.expect.FT_Vendas)
    );
  });
});

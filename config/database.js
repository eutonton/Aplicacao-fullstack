const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('company', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

sequelize.authenticate()
  .then(() => console.log('Conectado ao MySQL via Sequelize'))
  .catch(err => console.error('Erro ao conectar com o MySQL:', err));

module.exports = sequelize;

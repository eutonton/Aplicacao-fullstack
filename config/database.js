const { Sequelize } = require('sequelize');

// Configuração do Sequelize
const sequelize = new Sequelize('company', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Desabilita os logs de SQL no console
});

sequelize.authenticate()
  .then(() => console.log('Conectado ao MySQL via Sequelize'))
  .catch(err => console.error('Erro ao conectar com o MySQL:', err));

module.exports = sequelize;

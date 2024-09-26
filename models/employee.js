const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define o modelo Employee
const Employee = sequelize.define('Employee', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'employees', // Nome da tabela no banco
    timestamps: false, // Desativa os campos createdAt e updatedAt
});

// Sincroniza o modelo com o banco de dados (cria a tabela se não existir)
sequelize.sync()
    .then(() => console.log('Tabela employees sincronizada'))
    .catch((err) => console.error('Erro ao sincronizar tabela:', err));

module.exports = Employee;

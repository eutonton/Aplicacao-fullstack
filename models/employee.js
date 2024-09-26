const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


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
    tableName: 'employees',
    timestamps: false, 
});


sequelize.sync()
    .then(() => console.log('Tabela employees sincronizada'))
    .catch((err) => console.error('Erro ao sincronizar tabela:', err));

module.exports = Employee;
